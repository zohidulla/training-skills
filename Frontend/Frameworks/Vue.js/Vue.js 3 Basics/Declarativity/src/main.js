import "./style.css";
import { watchEffect, ref } from "vue";
import { shuffle } from "lodash";

const SIZE = 60;
const colors = ref([
  { r: 255, g: 0, b: 0 },
  { r: 0, g: 255, b: 0 },
  { r: 0, g: 0, b: 255 },
]);

watchEffect(() => {
  const container = document.querySelector("#colors");

  if (colors.value.length === 0) {
    container.innerHTML = "";
    return;
  }

  colors.value.forEach((c, i) => {
    const color = `rgb(${c.r}, ${c.g}, ${c.b})`;
    let node = container.querySelector(`.color[id='${color}']`);

    if (!node) {
      node = document.createElement("div");
      node.classList.add("color");
      node.id = color;
      node.style.backgroundColor = color;
      node.style.borderColor = `rgb(${c.r * 0.8}, ${c.g * 0.8}, ${c.b * 0.8})`;
      container.appendChild(node);
    }

    node.style.transform = `translateX(${SIZE * i}px)`;
  });
});

document.querySelector("button#add").addEventListener("click", () => {
  colors.value.push({
    r: Math.random() * 255,
    g: Math.random() * 255,
    b: Math.random() * 255,
  });
});

document.querySelector("button#reset").addEventListener("click", () => {
  colors.value = [];
});

document.querySelector("button#shuffle").addEventListener("click", () => {
  colors.value = shuffle(colors.value);
});
