import * as fetch from "./../form/api";

let state = {};

function setFieldValue(fieldId, value) {
  state[fieldId] = value;
}

function getFieldValue(fieldId) {
  return state[fieldId];
}

function getState() {
  return state;
}

async function useState() {
  const fields = await fetch.fields();
  fields.forEach((field) => {
    if (field.id === "nombre" || field.id === "email") return;
    state[field.id] = "";
  });
  return state;
}

export { setFieldValue, getFieldValue, getState };
export default useState;
