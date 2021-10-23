import { createEvent, createStore } from "effector";

export const STEPS: StepData[] = [
  {
    title: "Получить формы",
    description: "Получить список настроенных форм, выполнив GET запрос",
  },
  {
    title: "Проверить таргетинг",
    description:
      "Если использован таргетинг по сегменту, проверьте принадлежит ли клиент к нужному",
  },
  {
    title: "Отобразите формы",
    description:
      "Если пользователь подходит под условия, надо отобразить ему настроенный контент",
  },
];

export type StepsIndicatorProps = {
  currentStep: number;
};

export const $stepIndex = createStore<number>(0);
export const $stepData = $stepIndex.map((currentStep) => STEPS[currentStep]);

export const nextStep = createEvent();
export const prevStep = createEvent();

$stepIndex
  .on(nextStep, (currentStep) =>
    currentStep < STEPS.length ? currentStep + 1 : currentStep
  )
  .on(prevStep, (currentStep) =>
    currentStep > 0 ? currentStep + 1 : currentStep
  );

type StepData = {
  title: string;
  description: string;
};
