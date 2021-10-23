import { Steps } from "antd";
import { STEPS, $stepIndex } from "./model";
import { useStore } from "effector-react";

export const StepsIndicator = () => {
  const { Step } = Steps;

  const stepIndex = useStore($stepIndex);

  return (
    <Steps direction="vertical" current={stepIndex}>
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
