const form = document.getElementById("form");
const project_name = document.getElementById("project-name");
const project_description = document.getElementById("project-description");
const telegram_name = document.getElementById("telegram-name");
const email = document.getElementById("email");

form.addEventListener("submit", e => {
  e.preventDefault();

  checkInputs();
});


// Checks the input values of the form and sets error or success states accordingly.
function checkInputs() {
  const projectNameValue = project_name.value.trim();
  const projectDescriptionValue = project_description.value.trim();
  const telegramNameValue = telegram_name.value.trim();
  const emailValue = email.value.trim();

  if (projectNameValue === ""){
    setErrorFor(project_name, "project name is required");
  }else if(!/^[a-zA-Z0-9-_]+$/.test(projectNameValue)){
     setErrorFor(project_name,'Project name can only contain letters, numbers, underscores, and hyphens');
  }else if(projectNameValue.length > 50 || projectNameValue.length < 3){
    setErrorFor(project_name,'Project name should be 3-50 characters');
  }
  else {
    setSuccessFor(project_name);
  }

  if (projectDescriptionValue === "") {
    setErrorFor(project_description, "project description is required");
  }else if(!/^[a-zA-Z0-9\s.,]+$/.test(projectDescriptionValue)){
    setErrorFor(project_description,'invalid Project description');
 }else if(project_description.length > 200 || project_description.length < 50){
   setErrorFor(project_description,'Project description should be 3-200 characters');
 } 
  else {
    setSuccessFor(project_description);
  }

  if (emailValue === "") {
    setErrorFor(email, "email is required");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "email is not valid");
  } else {
    setSuccessFor(email);
  }

  if (telegramNameValue === "") {
    setErrorFor(telegram_name, "telegram name is required");
  }else if(!/^[a-zA-Z0-9\s]+$/.test(telegramNameValue)){
    setErrorFor(telegram_name,'invalid telegram name');
 }else if(telegramNameValue.length > 50 || telegramNameValue.length < 3){
   setErrorFor(telegram_name,'telegram name should be 3-50 characters');
 }
   else {
    setSuccessFor(telegram_name);
  }

}

// Sets an error message for an input field.
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const errorText = formControl.querySelector(".error");

  errorText.innerText = message;
  input.classList.add('is-invalid');
  errorText.className = "error invalid-feedback d-block"
}

// Sets a success state for an input field.
function setSuccessFor(input) {
  const formControl = input.parentElement;
  const errorText = formControl.querySelector(".error");

  input.classList.remove('is-invalid');
  input.classList.add('is-valid');
  errorText.className = "error invalid-feedback d-none"
}



// validate an email address 
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
