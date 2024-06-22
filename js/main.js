const form = document.getElementById("form");
const project_name = document.querySelector("#project-name");
const project_description = document.querySelector("#project-description");
const telegram_name = document.querySelector("#telegram-name");
const email = document.querySelector("#email");
const error = document.querySelector(".invalid-feedback");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  checkInputs();
});

function checkInputs() {
  let projectNameValue = project_name.value().trim();
  let projectDescriptionValue = project_description.value().trim();
  let telegramNameValue = telegram_name.value().trim();
  let emailValue = email.value().trim();

}

function setErrorFor(input,message){
    
}
