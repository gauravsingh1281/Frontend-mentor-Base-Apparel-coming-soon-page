function submitValue() {
  const emailValue = document.getElementById("email").value;
  let EmailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue);


  if(!EmailValidation) {
    $(".error-msg").removeClass("hidden");
    $(".error-img").removeClass("hidden");
    $("#email").css("border", "2px solid red");
    $(".btn2").css("bottom", "34.5px");
  } 
  else {
    $(".error-msg").addClass("hidden");
    $(".error-img").addClass("hidden");
    $("#email").css("border", "2px solid lime");
    $(".btn2").css("bottom", "17.5px");
  }
}
