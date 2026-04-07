import * as make from "./../html/maker.js";

const formContainer = document.querySelector("[data-form-root]");

function renderInput(field) {
  switch (field.type) {
    case "textarea":
      return make.textarea(field);

    case "select":
      return make.select(field);

    default:
      return make.text(field);
  }
}

export const section = (sId, sec) => {
  const title = sec.title;
  const fields = sec.fields;
  const fieldset = document.createElement("fieldset");
  fieldset.id = sId;

  const legend = document.createElement("legend");
  legend.textContent = title;
  fieldset.appendChild(legend);

  var fieldCounter = 1;

  fields.forEach((field) => {
    const div = document.createElement("div");
    const label = document.createElement("label");

    label.textContent = `${fieldCounter}.- ${field.label}`;
    label.htmlFor = field.id;
    div.appendChild(label);

    div.appendChild(renderInput(field));

    fieldset.appendChild(div);
    fieldCounter++;
  });

  formContainer.appendChild(fieldset);
};

export const submit = () => {
  const submitBtn = document.createElement("input");
  submitBtn.type = "submit";
  submitBtn.value = "Enviar";
  formContainer.appendChild(submitBtn);
};
