function validateForm() {
  var name = document.forms["registrationForm"]["name"].value;
  var age = document.forms["registrationForm"]["age"].value;
  var email = document.forms["registrationForm"]["email"].value;
  var password = document.forms["registrationForm"]["password"].value;
  var errorMessages = document.getElementById("errorMessages");
  errorMessages.innerHTML = "";

  if (name == "") {
    errorMessages.innerHTML += "<p class='error'>Name must be filled out</p>";
  }

  if (age < 18 || age > 99) {
    errorMessages.innerHTML += "<p class='error'>Age must be between 18 and 99</p>";
  }

  if (email == "") {
    errorMessages.innerHTML += "<p class='error'>Email must be filled out</p>";
  }

  if (password.length < 8 || password.length > 20) {
    errorMessages.innerHTML += "<p class='error'>Password must be minimum of 8 characters long and maximum of 20.</p>";
  }
  if (phone.length != 11) {
    errorMessages.innerHTML += "<p class='error'></p>";
  }

  if (errorMessages.innerHTML != "") {
    return false;
  }

  return true;
}

