import { createEffect, createStore } from "effector";
import { setStep } from "entities/steps-indicator/model";
import { FormsEntity, getData } from "processes/get-personalization-data";

export const $personalizationData = createStore<FormsEntity[]>([]);

export const getDataFx = createEffect(getData);

$personalizationData.on(getDataFx.doneData, (_state, result) => {
  setStep(1);
  return result;
});
