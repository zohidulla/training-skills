import { computed, ref, watchEffect } from "vue";

const counterButton = document.querySelector("button#counter");
const resetButton = document.querySelector("button#reset");

const counterState = ref(5);
const isCounterTooBig = computed(() => counterState.value > 10);

watchEffect(() => {
  renderCounter();
});

watchEffect(() => {
  updateCounterColor();
});

function renderCounter() {
  counterButton.textContent = `Counter: ${counterState.value}`;
}

function updateCounterColor() {
  counterButton.classList.toggle("red", isCounterTooBig.value);
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
