import { useState } from "react";

import { determineIsInTargeting } from "processes/determin-is-in-targeting";
import { parseFormInfo } from "processes/parse-personalization-info";
import { checkMindboxSegment } from "processes/check-mindbox-segment";
import { Badge, Button, Card, Descriptions } from "antd";

import { FormCardProps } from "./model";

export const FormCard = ({
  formInfo,
  showInResult,
  nextStep,
}: FormCardProps) => {
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
  const showInResultBtn = () =>
    views && (
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
      <Descriptions bordered size="small">
        <Descriptions.Item label="Тип таргетинга" span={3}>
          {targeting && targeting.length && targeting[0].field}
        </Descriptions.Item>

        {targeting &&
          targeting.length &&
          targeting[0].field === "mindbox_segment" && (
            <>
              <Descriptions.Item label="Должен быть в сегменте" span={3}>
                {targeting[0].value.inSegment ? "Да" : "Нет"}
              </Descriptions.Item>
              <Descriptions.Item
                label="Что делать, если не нашли клиента"
                span={3}
              >
                {targeting[0].value.inSegmentByDefault
                  ? "Показывать"
                  : "Не показывать"}
              </Descriptions.Item>
            </>
          )}
        {segmentState !== null && (
          <>
            <Descriptions.Item label="Статус сегмента клиента" span={3}>
              {segmentState === undefined ? (
                <Badge status="warning" text="Не найден в Mindbox" />
              ) : segmentState ? (
                <Badge status="success" text="В сегменте" />
              ) : (
                <Badge status="error" text="Не в сегменте" />
              )}
            </Descriptions.Item>
            <Descriptions.Item label="Попадает в таргетинг" span={3}>
              {isInTargeting ? (
                <Badge status="success" text="Попадает" />
              ) : (
                <Badge status="error" text="Не попадает" />
              )}
            </Descriptions.Item>
          </>
        )}
      </Descriptions>
    </Card>
  );
};
