import * as make from "./../html/maker.js";

const formContainer = document.querySelector("[data-form-root]");

function renderInput(field) {
  switch (field.type) {
    case "textarea":
      return make.textarea(field);

    case "select":
      return make.select(field);

    case "radio":
      return make.radios(field);

    case "pills":
      return make.pills(field);

    case "dynamicChecklist":
      return make.dynCL(field);

    default:
      return make.text(field);
  }
}

function labelHasInput(type) {
  return type === "radio" || type === "dynamicChecklist";
}

function renderField(field, fieldCounter) {
  const div = document.createElement("div");
  const label = document.createElement("label");

  label.textContent = `${fieldCounter}.- ${field.label}`;
  if (field.required === true) label.textContent += " *";
  if (!labelHasInput(field.type)) label.htmlFor = field.id;
  div.appendChild(label);

  const input = renderInput(field);
  if (field.required === true) input.required = true;
  if ("minLength" in field) input.setAttribute("min", field.minLength);
  if ("maxLength" in field) input.setAttribute("max", field.maxLength);
  div.appendChild(input);

  fieldCounter++;
  return div;
}

function section(sId, sec) {
  const title = sec.title;
  const fields = sec.fields;

  const fieldset = document.createElement("fieldset");
  fieldset.id = sId;

  const legend = document.createElement("legend");
  legend.textContent = title;
  fieldset.appendChild(legend);

  let fieldCounter = 1;
  fields.forEach((field) => {
    const input = renderField(field, fieldCounter);
    fieldset.appendChild(input);
    fieldCounter++;
  });

  formContainer.appendChild(fieldset);
}

function submit() {
  const submitBtn = document.createElement("input");
  submitBtn.type = "submit";
  submitBtn.value = "Enviar";
  formContainer.appendChild(submitBtn);
}

export { section, submit };
