import { createEffect, createStore } from "effector";
import { getData } from "processes/get-personalization-data";

export const $personalizationData = createStore({});

export const getDataFx = createEffect(getData);

$personalizationData.on(getDataFx.doneData, (_state, result) => result);
