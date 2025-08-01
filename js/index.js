$(function () {
  // .click()내부에 함수를 작성할때 : 기능 명칭만 사용() 는 제외
  // 특별히 메서드 내부에 함수를 작성하지 않고, 단독으로 함수를 작성할때
  //기능명칭();
  $("#loginBtn").click(loginCheck);
});

function loginCheck() {
  // 1. html 내부에 소비자가 작성한 값을 가져오기 위해서 val() 메서드 활용
  const username = $("#username").val();
  const password = $("#password").val();

  if (!username || !password) {
    $("#loginResult").html(
      // username 과 password 가 아무것도 적혀있지 않은게 맞다면 !!
      `
        <div class="error"> 아이디와 비밀번호를 입력하세요</div>
        
        `
    );
    return; // if문을 탈출한 후 아래에 작성한 코드를 실행하지 못하도록 돌려보내기 !!
  }
  $("#loginResult").html(
    `<div class="loading"> 로그인 중 입니다.......</div> `
  );

  if (
    (username === "admin" && password === "1234") ||
    (username === "user" && password === "1234")
  ) {

    // 1. form-group 숨김처리, loginBtn -> 로그아웃 버튼으로 변경
    // 2. 로그아웃 버튼 클릭했을 경우 form-group 보이고 로그인 버튼 변경

    $("#loginResult").html(
      `
            <div class="success">
            <p> <strong> 로그인 성공</strong></p>
            <p> ${username}님, 환영합니다.</strong></p>
            </div>    
            `
    );
  } else {
    $("#loginResult").html(
      `
            <div class="success">
            아이디 또는 비밀번호가 일치하지 않습니다. 
            </div>    
            `
    );
  }
}
