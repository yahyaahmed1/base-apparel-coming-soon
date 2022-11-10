let email = document.querySelector(".email");
let btn = document.querySelector("button");
let errorIcon = document.querySelector(".icon-error");
let errorMsg = document.querySelector(".email-error");

function checkValidation() {
  if (email.validity.valid != true) {
    errorIcon.style.cssText = "visibility: visible";
    errorMsg.style.cssText = "visibility: visible";
    email.style.cssText = "border: 2px solid var(--soft-red)";
  } else if (email.validity.valid == true || email.innerHTML === "") {
    errorIcon.style.cssText = "visibility: hidden";
    errorMsg.style.cssText = "visibility: hidden";
    email.style.cssText = "border: 1px solid var(--desaturated-red)";
  }
}
