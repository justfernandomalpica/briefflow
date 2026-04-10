import useState, { setFieldValue, getFieldValue, getState } from "./state";

let state = {};

(async function setState() {
  state = await useState();
})();

const change = (e) => {
  const input = e.target;
  setFieldValue(input.id, input.value);
  console.log(state);
};

const changePill = (input, value) => {
  setFieldValue(input.id, value);
  console.log(state);
};
export { change, changePill };
