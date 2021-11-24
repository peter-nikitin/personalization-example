import { createEvent, sample } from "effector"
import { $personalizationData, getDataFx } from "entities/personalization-data";
import { $requestConstructorState } from "pages/request-constructor";

export type GetUpdatedDataProps = {
  getUpdatedData: () => void;
}

export const getUpdate = createEvent();

sample({
  clock: getUpdate,
  source: $requestConstructorState,
  target: getDataFx,
});