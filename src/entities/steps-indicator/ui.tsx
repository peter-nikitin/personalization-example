import React from "react";
import { Steps } from "antd";
import { StepsIndicatorProps } from "./model";

export const StepsIndicator = ({ currentStep }: StepsIndicatorProps) => {
  const { Step } = Steps;

  return (
    <Steps direction="vertical" current={currentStep}>
      <Step
        title="Получить формы"
        description="Получить список настроенных форм, выполнив GET запрос по адресу {pam-pam}"
      />
      <Step
        title="Проверить таргетинг"
        description="Для каждой формы может быть настрое натргетинг. Надо проверить, подходит ли пользователь под заданные условия"
      />
      <Step
        title="Принять решение об отображении"
        description="Если пользователь подходит под условия, надо отобразить ему настроенный контент"
      />
    </Steps>
  );
};
