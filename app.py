from flask import Flask, request, jsonify, render_template
import csv
import pandas as pd
import numpy as np
import xgboost as xgb

# XGBoost 모델 로드
model = xgb.Booster()
model.load_model('models/xgboost_model.json')
df_holiday=pd.read_csv('data/df_holiday.csv', index_col=0)

# Flask 앱 초기화
app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route("/rank", methods=['GET','POST'])
def rankPage():

    def read_csv_file(filename):
        data = []

        with open(filename, 'r', encoding='utf-8') as file:
            csv_reader = csv.reader(file)
            next(csv_reader) # 0열 스킵
            for row in csv_reader:
                data.append(row[1:]) # 1열, 2열 읽기

        return data

    # 2020년 총 주문건수.csv 파일 읽기
    data2020 = []
    data2020.append(read_csv_file('data/2020/의정부시 업종별 주문건수.csv')) #0
    data2020.append(read_csv_file('data/2020/의정부시 월별 주문건수.csv')) #1
    data2020.append(read_csv_file('data/2020/의정부시 일별 주문건수.csv')) #2  
    data2020.append(read_csv_file('data/2020/의정부시 요일별 주문건수.csv')) #3
    data2020.append(read_csv_file('data/2020/의정부시 시간대별 주문건수.csv')) #4


    return render_template('delivery_rank.html', data2020=data2020,)


@app.route('/pre', methods=['GET'])
def predictPage():
    return render_template('predict.html')


# /predict 엔드포인트에 GET 메소드로 접근할 때, form.html을 렌더링합니다.
@app.route('/form', methods=['GET'])
def render_form():
    return render_template('form.html')

# API 경로 정의
@app.route('/predict', methods=['POST'])
def predict():
    # API 요청에서 입력 데이터 가져오기
    input_data = request.json

    # 입력 데이터 전처리
    new_input_data = pd.DataFrame(input_data, index=[0])

    # dayofweek 계산
    new_input_data['dayofweek'] = pd.to_datetime(new_input_data[['year', 'month', 'day']]).dt.dayofweek

    # 공휴일 여부 확인
    def check_holiday(row):
        if df_holiday[
            (df_holiday['year'] == row['year']) & 
            (df_holiday['month'] == row['month']) & 
            (df_holiday['day'] == row['day'])
        ].empty:
            return 0
        else:
            return 1

    new_input_data['공휴일여부'] = new_input_data.apply(check_holiday, axis=1)

    # 범주형 변수에 대해 원핫인코딩 수행
    cat_features = ['year', 'month', 'day', 'dayofweek', '시간대', '공휴일여부']
    cat_transformer = pd.get_dummies(new_input_data[cat_features])

    # 예측하기
    processed_input_data = model.predict(xgb.DMatrix(cat_transformer))

    # 예측 결과를 API 응답으로 반환
    return jsonify({'predictions': processed_input_data.tolist()})

# Flask 앱 실행
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)