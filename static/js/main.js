/*
모바일에서 보이는 화면 설정
window.addEventListener('DOMContentLoaded', function() {
    var mobileSection = document.getElementById('mobileSection');
  
    function handleViewportChange() {
      var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  
      if (viewportWidth < 768) { // 모바일 장치의 너비에 맞게 조정 (여기서는 768px 이하로 설정)
        mobileSection.style.display = 'block'; // 보이도록 설정
      } else {
        mobileSection.style.display = 'none'; // 숨기도록 설정
      }
    }
  
    // 초기 로드 시 및 뷰포트 변경 시에도 확인
    window.addEventListener('load', handleViewportChange);
    window.addEventListener('resize', handleViewportChange);
  });
  */

/* slideshow */

/* slideshow-end */

function showService() {
  const targetSection = document.getElementById("mobileSection");
  const sectionRect = targetSection.getBoundingClientRect();
  const sectionCenterX = sectionRect.left + sectionRect.width / 2;
  const windowCenterX = window.innerWidth / 2;
  const scrollX = sectionCenterX - windowCenterX;

  window.scrollTo({
    left: scrollX,
    behavior: "smooth",
  });

  const explainDiv = document.querySelector(".explainDiv");
  const explainLine = document.querySelector(".explainLine");
  const explainDiv2 = document.querySelector(".explainDiv2");
  const explainLine2 = document.querySelector(".explainLine2");

  const mobileSection = document.querySelector(".mobileSection");
  const mainAddDiv = document.querySelector(".main-add");
  const menubar = document.querySelector(".mobile-menubar");
  const btnBox = document.querySelector(".mobile-btnBox");
  const explanBox = document.querySelector(".explanBox");

  //mainAddDiv.style.display = "block";
  /*옆에 설명*/
  explainDiv.style.display = "block";
  explainDiv.style.animation = "scaleUp 0.5s forwards";
  //explainLine.style.display = "block";
  //explainLine.style.animation = "scaleUp 0.5s forwards";
  explainDiv2.style.display = "block";
  explainDiv2.style.animation = "scaleUp 0.5s forwards";
  //explainLine2.style.display = "block";
  //explainLine2.style.animation = "scaleUp 0.5s forwards";

  mobileSection.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  menubar.style.animation = "scaleUp 0.5s forwards";
  menubar.style.border = "1.5px solid #7742de";
  menubar.style.backgroundColor = "white";
  btnBox.style.animation = "scaleUp 0.5s forwards";
  btnBox.style.border = "1.5px solid #7742de";
  btnBox.style.backgroundColor = "white";
  explanBox.style.animation = "scaleUp 0.5s forwards";
  explanBox.style.border = "1.5px solid #7742de";
  //explanBox.style.backgroundColor = "white";
}
