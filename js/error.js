$(function () {
  $("#errorBtn").click(errorFn);
});

function errorFn() {
  const errorVal = $("#errorSelect").val();
  $.get(`http://httpstat.us/${errorVal}`)
    .done($("#errorResult").html(`<div class="success">요청성공</div>`))
    .falil(function (xhr, status, error) {
      const 상태코드 = xhr.status || "Unknown";
      const 상태내용 = xhr.statusText || error;

      let errorMsg = "";
      let errorIcon = "";
      let solution = "";

      //상태 코드별 메세지 설정
      switch (상태코드) {
        case 404:
          errorMsg = "요청한 정보를 찾을 수 없습니다.";
          solution = "URL 주소가 맞는지 확인하거나 관리자에게 문의하세요";
          // 정보를 찾으러 들어간 주소의 위차가 잘못되거나,URL 이상이 발생했을때
          break;
        case 403:
          errorMsg = "접근 권한이 없습니다.";
          solution = "로그인을 확인하거나 권한을 요청하세요";
          break;
        case 500:
          errorMsg = "서버 내부 오류가 발생했습니다. ";
          solution = "잠시후 다시 시도하거나 관리자에게 문의하세요";
          break;

        default:
          errorMsg = "알 수 없는 오류가 발생했습니다.";
          solution = "네트워크 상태를 확인하고 다시 시도해주세요";
          break;
      }
      $("#errorResult").html(
        `
        <div class="error">
            <p><strong>상태 코드 : </strong>${상태코드}</p>
            <p><strong>상태 텍스트 : </strong>${상태내용}</p>
            <p><strong>설명 : </strong>${errorMsg}</p>
            <p><strong>해결방법 : </strong>${solution}</p>
        </div>
  
        `
      );
    });
}
