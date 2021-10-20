import axios from "axios";
import { createEffect, createStore } from "effector";

export const $personalizationData = createStore({});

export const getDataFx = createEffect(async (url: string) => {
  const resp = await axios.get(url);
  return resp.data;
});

$personalizationData.on(getDataFx.doneData, (state, result) => result);
