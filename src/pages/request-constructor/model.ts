import {  FormsEntity } from "processes/get-personalization-data";

export type PersonalizationData = FormsEntity[];

export type FormState = {
  id: string;
  domain: string;
};

export type GetFormsInfoProps = {
  updateFormsInfo: React.Dispatch<React.SetStateAction<PersonalizationData>>;
  nextStep: () => void; 
};
