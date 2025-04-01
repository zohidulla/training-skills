const counterButton = document.querySelector("button#counter");
const resetButton = document.querySelector("button#reset");

const counterState = new Proxy(
  {
    counter: 5,
  },
  {
    set(target, prop, value) {
      if (target[prop] !== value) {
        target[prop] = value;
        renderCounter();
      }
      return true;
    },
  }
);

function renderCounter() {
  counterButton.textContent = `Counter: ${counterState.counter}`;
  counterButton.classList.toggle("red", isCounterTooBig());
}

function isCounterTooBig() {
  return counterState.counter > 10;
}

counterButton.addEventListener("click", () => {
  counterState.counter += 1;
});

resetButton.addEventListener("click", () => {
  counterState.counter = 0;
});

setInterval(() => {
  counterState.counter += 1;
}, 1000);
