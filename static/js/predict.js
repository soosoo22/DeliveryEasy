function predictOrder() {
  var calendar = document.getElementById("yearInput").value;
  var time = document.getElementById("timeInput").value;

  //일단 지금은 필요없음
  var city = document.getElementById("citySelect").value;
  var selectedCity = city.options[city.selectedIndex].value;
  var district = document.getElementById("districtSelect").value;
  var selectedDistrict = district.options[district.selectedIndex].value;
  var category = document.getElementById("categorySelect").value;
  var selectedCategory = category.options[category.selectedIndex].value;

  console.log(calendar, time);

  /*
  // API에 보낼 데이터를 JSON 형식으로 생성
  var inputData = {
    year: parseInt(year),
    month: parseInt(month),
    day: parseInt(day),
    시간대: parseInt(hour),
  };

  // API에 POST 요청 보내기
  fetch("/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inputData),
  })
    .then((response) => response.json())
    .then((data) => {
      var predictionResult = data.predictions[0];
      document.getElementById("result").innerText =
        "Predicted Order: " + predictionResult;
    })
    .catch((error) => console.error("Error:", error));
    */
}
