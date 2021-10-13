import {  FormsEntity } from "shared/api/get-personalization-data";

export type PersonalizationData = FormsEntity[];

export type FormState = {
  id: string;
  domain: string;
};

export type GetFormsInfoProps = {
  updateFormsInfo: React.Dispatch<React.SetStateAction<PersonalizationData>>;
};
