//jQuery starts here
$(document).ready(function() {
  $("#btn1").on("click",
  function() {
    var userIdCheck = $("#userId").val();
    var passwordCheck = $("#password").val();
    // checkCredentials(userIdCheckCheck, passwordCheckCheck);
    // console.log(userIdCheckCheck);
    // console.log(passwordCheckCheck);
    //check to make sure user id is different from passwordCheck and it is more than 6 characters long and it doesn't includes a !, # or $
    if (userIdCheck != passwordCheck  && userIdCheck.length >= 6 && (!userIdCheck.includes("!") && !userIdCheck.includes("#") && !userIdCheck.includes("$"))) {
      $("#userIdCheck").val("");
      $("#userIdCheckError").text("User is not valid. Please try again");
    };
    //check to make sure passwordCheck is not equal to the string "passwordCheck", and that it does include either !, # or $
    // var pass = (passwordCheck != "password")
    //   && (passwordCheck.includes("!") || passwordCheck.includes("#") || passwordCheck.includes("$"))
    //   //and also checks to make sure it includes a number
    //   && (passwordCheck.includes("0") || passwordCheck.includes("1") || passwordCheck.includes("2") || passwordCheck.includes("3") || passwordCheck.includes("4") || passwordCheck.includes("5") || passwordCheck.includes("6") || passwordCheck.includes("7") || passwordCheck.includes("8") || passwordCheck.includes("9"))
      //and checks to make sure there is at least one uppercase and one lowercase letter
      // && (passwordCheck != passwordCheck.toUpperCase() && passwordCheck != passwordCheck.toLowerCase());

      //checks to see if Identification is false, give user feedback that it is not valid
    // if (userIdCheck === false) {
    //   $("#userIdCheck").val("");
    //   $("#userIdCheckError").text("User id not valid. Please try again");
    // }

    //checks to see if pass is false, give user feedback that it is not valid
    // if (passwordCheck === false) {
    //   $("#passwordCheck").val("");
    //   $("#passwordCheckError").text("passwordCheck not valid. Please try again");
    // }

    //clear the error message if Identification is true but pass is false
    // if (userIdCheck === true && passwordCheck === false) {
    //   $("#userIdCheckError").text("");
    // }
    //clear the error message if pass is true but Identification is false
    // if (passwordCheck === true && userIdCheck === false) {
    //   $("#passwordCheckError").text("");
    // }
      //gives user feedback that their user id and passwordCheck are valid
    // if (userIdCheck=== true && passwordCheck === true) {
    //     $("#feedback").text("Your credentials are valid");
    //     $("#passwordCheck").val("");
    //     $("#userIdCheck").val("");
    //     $("#passwordCheckError").text("");
    //     $("#userIdCheckError").text("");
    // }
  }); // end btn1 click
}); // end docuement ready
