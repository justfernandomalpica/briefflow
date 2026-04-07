const schemaUrl = "http://192.168.1.128:3000/api/sections";
const fieldsUrl = "http://192.168.1.128:3000/api/fields";

export const schema = async () => {
  const res = await fetch(schemaUrl);
  const data = await res.json();
  return data;
};

export const fields = async (sectionId) => {
  const res = await fetch(`${fieldsUrl}/${sectionId}`);
  const data = await res.json();
  return data;
};
