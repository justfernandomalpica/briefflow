function textarea(field) {
  const textarea = document.createElement("textarea");

  textarea.id = field.id;
  textarea.name = field.id;
  textarea.placeholder = field.placeholder;

  return textarea;
}

function select(field) {
  const select = document.createElement("select");
  select.id = field.id;
  select.name = field.id;

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

  return select;
}

function text(field) {
  const text = document.createElement("input");
  text.type = "text";
  if (field.placeholder) text.placeholder = field.placeholder;
  text.name = field.id;
  text.id = field.id;
  return text;
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
    div.appendChild(input);

    label.setAttribute("for", optionId);
    label.textContent = op;
    div.appendChild(label);

    div.style = "display: flex; gap: 10px;";
    contanier.appendChild(div);
  });

  return contanier;
}

function pills(field) {
  const fragment = document.createDocumentFragment();
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

  fragment.appendChild(note);
  fragment.appendChild(pillsDiv);
  fragment.appendChild(input);
  return fragment;
}

function dynCL(field) {
  const fragment = document.createDocumentFragment();
  const optionsDiv = document.createElement("div");

  optionsDiv.id = field.id;
  optionsDiv.setAttribute("dynCL-options", "");

  fragment.appendChild(optionsDiv);
  return fragment;
}

export { textarea, select, text, radios, pills, dynCL };
