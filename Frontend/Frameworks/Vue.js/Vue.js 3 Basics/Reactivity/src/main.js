import { computed, ref, watchEffect } from "vue";

const counterButton = document.querySelector("button#counter");
const resetButton = document.querySelector("button#reset");

const initialState = {
  counter: 1,
};
const counterState = ref(initialState);
const isCounterTooBig = computed(() => counterState.value.counter > 10);

watchEffect(() => {
  renderCounter();
});

watchEffect(() => {
  updateCounterColor();
});

function renderCounter() {
  counterButton.textContent = `Counter: ${counterState.value.counter}`;
}

function updateCounterColor() {
  counterButton.classList.toggle("red", isCounterTooBig.value);
}

counterButton.addEventListener("click", () => {
  counterState.value.counter += 1;
});

resetButton.addEventListener("click", () => {
  counterState.value.counter = 0;
});

setInterval(() => {
  initialState.counter += 1;
}, 1000);
