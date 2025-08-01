// 1. 강아지사진을 클릭하지 않아도 랜덤으로 1장 보이게 설정
//https://dog.ceo/api/breeds/image/random
//https://cat.ceo/api/breeds/image/random
let 현재페이지 = 1;
$(function () {
  // 강아지 사진 무조건 랜덤으로 1장 출력
  randomDog();

  // 강아지 사진 이미지를 클릭할 경우 강아지 사진을 랜덤으로출력
  $("#dogResult").click(randomDog);
  gatCat();
  // 페이지네이션 버튼 이벤트
  $("#prevBtn").click(function () {
    if (현재페이지 > 1) {
      현재페이지--;
      gatCat();
    } else {
      alert("첫번째 페이지 페이지 입니다.");
    }
  });

  $("#nextBtn").click(function () {
    현재페이지++;
    gatCat();
  });
});
function gatCat() {
  //https://cat.ceo/api/breeds/image/random/limit=10

  $.get("https://api.thecatapi.com/v1/images/search?limit=10").done(function (
    data
  ) {
    const catImages = data
      .map(
        (cat) => `
      <div class="cat-card">
        <img src ="${cat.url}" 
            class ="cat-detail"
            onclick="showFullImg('${cat.url}')"/>
       </div>     
    `
      )
      .join("");

    $("#catResult").html(
      `
       ${catImages};
       
       `
    );
  });
}
// 이미지 클릭시 큰 이미지로 보여주기

function showFullImg(imageUrl) {
  //prepend() 선택한 요소의 맨 앞에 새로운 요소(태그)를 추가
  /*
        .prepend()  = 맨 앞에 새로운 것을 이어서 추가
        .append()  = 맨 뒤에 새로운 것을 이어서 추가
        .html()  = 맨 뒤에 새로운 것을 이어서 추가
    
    
    */
  $("#catResult").prepend(
    `
    
    <div id="abc"class="cat-modal" onclick="closeFullimg()">
        <img src="${imageUrl}" class="cat-detail-show"/>
    </div>
    `
  );
}

//이미지 삭제
// close() open()  과 같이 이미 만든 예약어 메서드나 함수며칭은
// 사용 지양
// 각 회사 개발가 만듯듯한 명칭으로 함수 메서드 변수이름을 만드는 것이 좋음
function closeFullimg() {
  $("#abc").remove();
}

function randomDog() {
  $.get("https://dog.ceo/api/breeds/image/random").done(function (data) {
    $("#dogResult").html(`<img src=${data.message}> `);
  });
}
