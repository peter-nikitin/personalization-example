import { PageHeader } from "antd";
import { useStore } from "effector-react";
import { $stepData, setStep } from "entities/steps-indicator/model";
import { GetUpdatedData } from "features/get-update-data";

export const Header = () => {
  const step = useStore($stepData);

  return (
    <PageHeader
      ghost={false}
      onBack={() => setStep(0)}
      title={step.title}
      extra={[<GetUpdatedData />]}
    />
  );
};
