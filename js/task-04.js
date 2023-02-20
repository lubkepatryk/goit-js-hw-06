const counterValue = document.getElementById("value");

document
  .querySelector('[data-action="increment"]')
  .addEventListener("click", () => {
    counterValue.textContent = parseInt(counterValue.textContent) + 1;
  });

document
  .querySelector('[data-action="decrement"]')
  .addEventListener("click", () => {
    counterValue.textContent = parseInt(counterValue.textContent) - 1;
  });
