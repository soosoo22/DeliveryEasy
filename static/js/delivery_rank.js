/* onclick="toggleActive(this)
//메뉴바 클릭 시 페이지 이동, 아래 div 색깔 변경 및 애니메이션
function toggleActive(element) {
  const activeClass = "active";

  // 현재 활성화된 요소 찾기
  const activeElement = document.querySelector(`.${activeClass}`);

  if (activeElement) {
    // 현재 활성화된 요소의 클래스 제거
    activeElement.classList.remove(activeClass);
  }

  // 클릭된 요소에 활성화 클래스 추가
  element.classList.add(activeClass);
  
}
*/

/*
function changeButtonStyle(button) {
  // 모든 버튼의 스타일 초기화
  var buttons = document.getElementsByClassName("middlebarBtn");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

  // 클릭한 버튼의 스타일 변경
  button.classList.add("active");
}
*/

function changeButtonStyle(button, tabId) {
  // 모든 버튼의 스타일 초기화
  var buttons = document.getElementsByClassName("middlebarBtn");
  var graphBar = document.getElementById("graphBar");
  var graphBarMonth = document.getElementById("graphBarMonth");

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

  // 클릭한 버튼의 스타일 변경
  button.classList.add("active");

  if (tabId === "industryTab") {
    //graphBar.style.display = "block";
    //graphBarMonth.style.display = "none";
  } else if (tabId === "monthTab") {
    //graphBar.style.display = "none";
    //graphBarMonth.style.display = "block";
  } else if (tabId === "dayTab") {
  } else if (tabId === "weekdayTab") {
  } else if (tabId === "timeTab") {
  }
}
