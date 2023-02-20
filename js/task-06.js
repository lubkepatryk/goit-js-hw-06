const input = document.querySelector("#validation-input");
const validLength = Number(input.getAttribute("data-length"));

input.addEventListener("blur", () => {
  const valueLength = input.value.length;
  if (valueLength === validLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
