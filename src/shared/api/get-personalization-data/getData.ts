import axios from "axios";
import { Forms } from "shared/api/get-personalization-data/model";

export const getData = async (clientId: string, domain: string) => {
  const url = `https://web.popmechanic.ru/web/init/${clientId}/?domain=${domain}`;

  const result = await axios.get<Forms>(url);

  const { forms } = result.data;

  return forms;
};
