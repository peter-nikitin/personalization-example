import { createEvent, createStore } from "effector";
import { FormsEntity } from "processes/get-personalization-data";

export type PersonalizationData = FormsEntity[];

export type FormState = {
  id: string;
  domain: string;
};

export type GetFormsInfoProps = {
  updateFormsInfo: React.Dispatch<React.SetStateAction<PersonalizationData>>;
  nextStep: () => void;
};

export const setField = createEvent<{ [k: string]: string }>();
export const $requestUrl = createStore({});

$requestUrl.on(
  setField,
  (state, { field, value }: { [k: string]: string }) => ({
    ...state,
    [field]: value,
  })
);
