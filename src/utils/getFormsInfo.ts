import axios from "axios";
import { Forms } from "../forms-declaration";

const getFormsInfo = async (clientId: string, domain: string) => {
  const url = `https://web.popmechanic.ru/web/init/${clientId}/?domain=${domain}`;

  const result = await axios.get<Forms>(url);

  const { forms } = result.data;

  return forms;
};

export default getFormsInfo;
