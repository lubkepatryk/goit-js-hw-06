const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailInput = form.elements.email;
  const passwordInput = form.elements.password;

  if (!emailInput.value || !passwordInput.value) {
    alert("Please fill in all the fields!");
    return;
  }

  const loginData = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  console.log(loginData);
  form.reset();
});
