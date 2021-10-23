import axios from "axios";
import { Forms, GetData } from "processes/get-personalization-data/model";

export const getData: GetData = async ({ id, domain }) => {
  const url = `https://web.popmechanic.ru/web/init/${id}/?domain=${domain}`;

  const result = await axios.get<Forms>(url);

  const { forms } = result.data;

  if (forms) {
    return forms;
  }
  return []; 
};
