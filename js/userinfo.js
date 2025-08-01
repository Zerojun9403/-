$(function () {
  getUsers();
});

function getUsers() {
  //https://jsonplaceholder.typicode.com/users/
  //https://jsonplaceholder.typicode.com/users/${userId}
  $.get("https://jsonplaceholder.typicode.com/users").done(function (data) {
    //  모든 사용자를 map을 활용하여 리스트 목록 형태로 표시
    /**
     *
     * onClick = HTML 요소에서 클릭 이벤트를 직접 연결하는 속성
     * 클릭 했을때 실행할 JavaScript 코드를 작성
     * getUserDetail() 실행할 함수 이름 = 사용자 상세 정보를 가져오는 함수
     * getUserDetail() -> data에서 가져온 유저 목록들을 순회하여
     *                      user 1명씩 보유하고 있는 id를 이용해서
     *                      주소값으로 사용
     *                      map으로 유저 정보를 하나씩 보여줄 때 유저 데이터에는 id,name,uesrname,email,adderss 등의 데이터
     *                    관리자가 보길 원하는 회원 유저 의 이름을 클릭했을 때
     *                    해당하는 유저의 id값을 getUserDetail() 내부 매개변수값으로 전달하고,
     *                    해당하는 유저의 정보를 확인할 수 있도록 설정
     *
     *
     * userList 라는 변수이름 대신 직접 $("#userList").html() 내부 안에 data.map() 형태를 사용할 수 있지만,
     *              코드의 가독성을 위하여 변수 이름에 담아서 보여질 결과를 분리하여 사용하기도 함.
     *
     *
     *
     *
     *
     *
     *
     *
     */
    const userList = data
      .map(
        (user) =>
          `<p class="user-detail" onclick="getUserDetail(${user.id})">
             ${user.name} 님- ${user.id}
        </p>
        `
      )
      .join(""); // map 뒤에 자동으로 붙는 , 특수문자 제거

    $("#userList").html(
      `<div class="success">
        <h3>전체사용자목록</h3>
        ${userList}
        </div>
        `
    );
  });
}

function getUserDetail(userId) {
  $("#userResult").html(
    '<div class="loading">사용자 상세 정보를 가져오는 중...</div>'
  );

  $.get(`https://jsonplaceholder.typicode.com/users/${userId}`).done(function (
    data
  ) {
    $("#userResult").html(`
                    <div class="success">
                        <div class="user-card">
                            <h3>👤 ${data.name} (ID: ${data.id})</h3>
                            <p><strong>사용자명:</strong> ${data.username}</p>
                            <p><strong>이메일:</strong> ${data.email}</p>
                            <p><strong>전화번호:</strong> ${data.phone}</p>
                            <p><strong>웹사이트:</strong> ${data.website}</p>
                            <p><strong>회사:</strong> ${data.company.name}</p>
                            <p><strong>회사 업무:</strong> ${data.company.catchPhrase}</p>
                            <p><strong>주소:</strong> ${data.address.street}, ${data.address.city}</p>
                            <p><strong>우편번호:</strong> ${data.address.zipcode}</p>
                        </div>
                    </div>
                `);
  });
}
