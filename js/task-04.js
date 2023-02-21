const counterEl = document.querySelector("#counter");
const valueEl = counterEl.querySelector("#value");
const incrementBtn = counterEl.querySelector('[data-action="increment"]');
const decrementBtn = counterEl.querySelector('[data-action="decrement"]');

let counterValue = 0;

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});
