import { createEvent, createStore } from "effector";

export type ShowResult = (url: string) => void;

export type ResultViewContenerProps = {
  bannerImageUrl: string;
};

export const $resultBanner = createStore<string>("");

export const showBanner = createEvent();

$resultBanner.on(showBanner, (_, banner) => banner);
