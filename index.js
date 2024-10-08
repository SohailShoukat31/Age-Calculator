function calculateAge() {
  var birthdateInput = document.getElementById("birthdate").value;
  if (!birthdateInput) {
    document.getElementById("result").innerText =
      "Please enter a valid birth date.";
    return;
  }

  var birthdate = new Date(birthdateInput);
  var today = new Date();

  var age = today.getFullYear() - birthdate.getFullYear();
  var monthDifference = today.getMonth() - birthdate.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthdate.getDate())
  ) {
    age--;
  }

  document.getElementById("result").innerText =
    "You are " + age + " years old.";
}

var calculateBtn = document.getElementById("calculateBtn");
calculateBtn.onclick = calculateAge;
