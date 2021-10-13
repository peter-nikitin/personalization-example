import { useState } from "react";

import { determineIsInTargeting } from "processes/determin-is-in-targeting";
import { parseFormInfo } from "features/parse-personalization-info";
import { checkMindboxSegment } from "processes/check-mindbox-segment";
import { Button, Card, Descriptions } from "antd";

import { FormCardProps } from "./model";

export const FormCard = ({ formInfo, showInResult, nextStep }: FormCardProps) => {
  const [isInTargeting, setIsInTargeting] = useState<boolean>(false);
  const { targeting, views } = parseFormInfo(formInfo);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [segmentState, setSegmentState] = useState<boolean | undefined | null>(
    null
  );

  const handleCheckSegment = async () => {
    nextStep(); 
    if (targeting) {
      const [firstTargetingNode] = targeting;

      const { segmentation, operation } = firstTargetingNode.value;
      setIsLoading(true);

      const result = await checkMindboxSegment(segmentation, operation);
      setSegmentState(result);

      const isInTargeting = determineIsInTargeting(firstTargetingNode, result);
      setIsInTargeting(isInTargeting);

      setIsLoading(false);
    }
  };

  const checkSegmentButton = () => (
    <Button
      type="link"
      loading={isLoading}
      size="small"
      key="checkSegment"
      onClick={handleCheckSegment}
    >
      Проверить сегмент
    </Button>
  );
  const showInResultBtn = () => (
    <Button
      type="link"
      size="small"
      key="showINResult"
      disabled={!isInTargeting}
      onClick={() => showInResult(views.image)}
    >
      Показать
    </Button>
  );

  return (
    <Card
      title={formInfo.name}
      actions={[checkSegmentButton(), showInResultBtn()]}
    >
      <Descriptions>
        <Descriptions.Item label="Поле таргетинга" span={3}>
          {targeting && targeting[0].field}
        </Descriptions.Item>
        {segmentState !== null && (
          <>
            <Descriptions.Item label="Статус сегмента клиента" span={3}>
              {segmentState === undefined
                ? "Не найден в Mindbox"
                : segmentState
                ? "В сегменте"
                : "Не в сегменте"}
            </Descriptions.Item>
            <Descriptions.Item label="Попадает в таргетинг" span={3}>
              {isInTargeting ? "Попадает" : "Не попадает"}
            </Descriptions.Item>
          </>
        )}
      </Descriptions>
    </Card>
  );
};
