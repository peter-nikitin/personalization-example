import { ShowResult } from "pages/result-view-conteiner";
import { FormsEntity } from "processes/get-personalization-data";

export type FormsProps = {
  forms: FormsEntity[];
  showResult: ShowResult;
  nextStep: () => void; 
};
