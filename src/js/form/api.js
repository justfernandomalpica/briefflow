const schemaUrl = "/api/sections";

export const schema = async () => {
  const res = await fetch(schemaUrl);
  const data = await res.json();
  return data;
};
