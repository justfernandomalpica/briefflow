import { pill } from "../html/maker";
import { changePill } from "./stateHandling";

function pillsLogic(e) {
  const input = e.target;
  if (e.data === ",") {
    const value = input.value.slice(0, -1).trim();
    const isValid = /^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9 ]+$/.test(value);
    if (value === ",") return;
    if (!isValid) return;
    appendPill(input, value);
    savePillsToState(input);
    input.value = "";
  }
}

function appendPill(input, value) {
  const query = `[pills-container]#${input.id}_pills`;
  const container = document.querySelector(query);

  const element = pill(value);
  element.setAttribute(`${input.id}_pill`, "");
  container.appendChild(element);
}

function savePillsToState(input) {
  const query = `[pills-container]#${input.id}_pills`;
  const container = document.querySelector(query);
  let value = [];
  container.childNodes.forEach((child) => {
    value.push(child.textContent);
  });
  changePill(input, value);
}

export default pillsLogic;
