function submitValue() {
  const emailValue = document.getElementById("email").value;
  let EmailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    emailValue
  );
  if (!EmailValidation) {
    document.querySelector(".error-msg").classList.remove("hidden");
    document.querySelector(".error-img").classList.remove("hidden");
    document.querySelector("#email").style.border = "2px solid red";
    document.querySelector(".btn2").style.bottom = "33.5px";
  } else {
    document.querySelector(".error-msg").classList.add("hidden");
    document.querySelector(".error-img").classList.add("hidden");
    document.querySelector("#email").style.border = "2px solid lime";
    document.querySelector(".btn2").style.bottom = "16.5px";
  }
}
