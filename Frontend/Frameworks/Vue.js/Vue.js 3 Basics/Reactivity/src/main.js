import { ref, watch } from "vue";

const counterButton = document.querySelector("button#counter");
const resetButton = document.querySelector("button#reset");

const counterState = ref(5);

watch(counterState, () => {
  renderCounter();
});

function renderCounter() {
  counterButton.textContent = `Counter: ${counterState.value}`;
  counterButton.classList.toggle("red", isCounterTooBig());
}

function isCounterTooBig() {
  return counterState.value > 10;
}

counterButton.addEventListener("click", () => {
  counterState.value += 1;
});

resetButton.addEventListener("click", () => {
  counterState.value = 0;
});

setInterval(() => {
  counterState.value += 1;
}, 1000);
