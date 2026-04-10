const schemaUrl = "/api/sections";
const fieldsUrl = "/api/fields";

export async function schema() {
  const res = await fetch(schemaUrl);
  const data = await res.json();
  return data;
}

export async function fields() {
  const res = await fetch(fieldsUrl);
  const data = await res.json();
  return data;
}
