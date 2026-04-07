import * as fetch from "./api.js";
import * as render from "./renderForm.js";

export default formInit = async () => {
  const sections = await fetch.schema();

  Object.entries(sections).forEach(async (section) => {
    const sId = section[0];
    const sec = section[1];

    if (sId === "identificacion") return;

    render.section(sId, sec);
  });

  render.submit();
};
