function textarea(field, handler) {
  const fragment = document.createDocumentFragment();
  const label = addLabel(field);
  const textarea = document.createElement("textarea");

  textarea.id = field.id;
  textarea.name = field.id;
  textarea.placeholder = field.placeholder;
  textarea.addEventListener("input", handler);
  setAttrs(field, textarea);

  fragment.appendChild(label);
  fragment.appendChild(textarea);
  return fragment;
}

function select(field) {
  const fragment = document.createDocumentFragment();
  const label = addLabel(field);

  const select = document.createElement("select");
  select.id = field.id;
  select.name = field.id;
  setAttrs(field, select);

  const defOp = document.createElement("option");
  defOp.value = "";
  defOp.textContent = "-- Selecciona --";
  defOp.disabled = true;
  defOp.selected = true;
  defOp.hidden = true;

  select.appendChild(defOp);

  field.options.forEach((op) => {
    const option = document.createElement("option");
    option.value = op;
    option.textContent = op;
    select.appendChild(option);
  });

  fragment.appendChild(label);
  fragment.appendChild(select);
  return fragment;
}

function text(field, handler) {
  const fragment = document.createDocumentFragment();
  const text = document.createElement("input");
  const label = addLabel(field);

  text.type = "text";
  if (field.placeholder) text.placeholder = field.placeholder;
  text.name = field.id;
  text.id = field.id;
  text.addEventListener("input", handler);
  setAttrs(field, text);

  fragment.appendChild(label);
  fragment.appendChild(text);
  return fragment;
}

function radios(field) {
  const contanier = document.createElement("div");

  field.options.forEach((op) => {
    const optionId = `${field.id}_${op}`;
    const div = document.createElement("div");
    const label = document.createElement("label");
    const input = document.createElement("input");

    input.type = "radio";
    input.id = optionId;
    input.name = field.id;
    input.value = op;
    setAttrs(field, input);
    div.appendChild(input);

    label.setAttribute("for", optionId);
    label.textContent = op;
    div.appendChild(label);

    div.style = "display: flex; gap: 10px;";
    contanier.appendChild(div);
  });

  return contanier;
}

function pills(field, handler) {
  const fragment = document.createDocumentFragment();
  const label = addLabel(field);
  const pillsDiv = document.createElement("div");
  const input = document.createElement("input");
  const note = document.createElement("p");

  note.textContent = "Separa cada elemento con una coma ( , )";

  pillsDiv.setAttribute("pills-container", "");
  pillsDiv.id = `${field.id}_pills`;

  input.type = "text";
  input.id = field.id;
  input.name = field.id;
  input.placeholder = field.placeholder;
  input.setAttribute("pills-input", "");
  input.addEventListener("input", handler);
  setAttrs(field, input);

  fragment.appendChild(label);
  fragment.appendChild(note);
  fragment.appendChild(pillsDiv);
  fragment.appendChild(input);
  return fragment;
}

function pill(value) {
  const pill = document.createElement("span");
  pill.textContent = value;
  return pill;
}

function dynCL(field) {
  const fragment = document.createDocumentFragment();
  const optionsDiv = document.createElement("div");

  optionsDiv.id = field.id;
  optionsDiv.setAttribute("dynCL-options", "");

  fragment.appendChild(optionsDiv);
  return fragment;
}

function addLabel(field) {
  const label = document.createElement("label");
  label.textContent = field.label;

  if (field.required === true) {
    const star = document.createElement("span");
    star.textContent = "*";
    label.appendChild(star);
  }

  label.htmlFor = field.id;
  return label;
}

function setAttrs(field, input) {
  if (field.required === true) input.required = true;
  if ("minLength" in field) input.setAttribute("minLength", field.minLength);
  if ("maxLength" in field) input.setAttribute("maxLength", field.maxLength);
}

export { textarea, select, text, radios, pills, pill, dynCL };
