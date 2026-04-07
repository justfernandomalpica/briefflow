export const textarea = (field) => {
  const textarea = document.createElement("textarea");

  textarea.id = field.id;
  textarea.name = field.id;
  textarea.placeholder = field.placeholder;

  return textarea;
};

export const select = (field) => {
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
};

export const text = (field) => {
  const text = document.createElement("input");
  text.type = "text";
  if (field.placeholder) text.placeholder = field.placeholder;
  text.name = field.id;
  text.id = field.id;
  return text;
};
