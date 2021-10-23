import { createEvent, createStore, sample } from "effector";
import { getDataFx } from "entities/personalization-data";
import { FormsEntity } from "processes/get-personalization-data";

export type PersonalizationData = FormsEntity[];

export type RequestConstructor = {
  id: string;
  domain: string;
};

export type GetFormsInfoProps = {
  updateFormsInfo: React.Dispatch<React.SetStateAction<PersonalizationData>>;
  nextStep: () => void;
};

export const submitted = createEvent(); 

export const setField = createEvent<{ [k: string]: string }>();
export const $requestConstructorState = createStore<RequestConstructor>({
  domain: "",
  id: "",
});

$requestConstructorState.on(
  setField,
  (state, { field, value }: { [k: string]: string }) => ({
    ...state,
    [field]: value,
  })
);

sample({
  clock: submitted,
  source: $requestConstructorState,
  target: getDataFx,
});

 export const handleInputChange = setField.prepend(
   (event: React.ChangeEvent<HTMLInputElement>) => ({
     field: event.target.name,
     value: event.target.value,
   })
 );