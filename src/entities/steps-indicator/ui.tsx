import React from "react";
import { Steps } from "antd";
import { StepsIndicatorProps, STEPS } from "./model";

export const StepsIndicator = ({ currentStep }: StepsIndicatorProps) => {
  const { Step } = Steps;

  return (
    <Steps direction="vertical" current={currentStep}>
      {STEPS.map((step) => (
        <Step
          title={step.title}
          description={step.description}
          key={step.title}
        />
      ))}
    </Steps>
  );
};
