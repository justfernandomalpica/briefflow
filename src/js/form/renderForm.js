import * as make from "./../html/maker.js";
import * as handle from "./../logic/stateHandling.js";
import pillsLogic from "../logic/pillsLogic.js";

const formContainer = document.querySelector("[data-form-root]");

function renderInput(field) {
  switch (field.type) {
    case "textarea":
      return make.textarea(field, handle.change);

    case "select":
      return make.select(field);

    case "radio":
      return make.radios(field);

    case "pills":
      return make.pills(field, pillsLogic);

    case "dynamicChecklist":
      return make.dynCL(field);

    default:
      return make.text(field, handle.change);
  }
}

function renderField(field, fieldCounter) {
  const div = document.createElement("div");

  const input = renderInput(field);
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
