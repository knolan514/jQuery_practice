var count = 0;

$(document).ready(function() {
  $("#btn1").on("click",
  function() {
    var userIdCheck = $("#userId").val();
    var passwordCheck = $("#password").val();
    if (count === 5) {
      alert("You're done");
        $("#btn1").off("click");
      }
    if (count <= 4) {
      count = count + 1;

      if (userIdCheck.length >= 6 && (!userIdCheck.includes("!") && !userIdCheck.includes("#") && !userIdCheck.includes("$")) ) {
        $("#userIdCheckError").text("User ID is accepted.");
      } else {
        $("#userIdCheckError").text("User ID is NOT accepted.");
        $(".userDelete").val("");
      };

      if(passwordCheck != "password" && (passwordCheck != passwordCheck.toUpperCase() && passwordCheck != passwordCheck.toLowerCase()) &&
      //must include at least one of these symbols
      (passwordCheck.includes("!") || passwordCheck.includes("#") || paswordCheck.includes("$")) &&
      //must include any of these digits
      (passwordCheck.includes("0") || passwordCheck.includes("1") || passwordCheck.includes("2") || passwordCheck.includes("3") || passwordCheck.includes("4") || passwordCheck.includes("5") || passwordCheck.includes("6") || passwordCheck.includes("7") || passwordCheck.includes("8") || passwordCheck.includes("9")) ){
        $("#passwordCheckError").text("Password is accepted.");
      } else {
        $("#passwordCheckError").text("Password is NOT accepted.");
        $(".passDelete").val("");

      };

      // $("btn1").click(function(){
      //   $("btn1").off("click");
      // });

    };


  }); // end btn1 click
}); //
