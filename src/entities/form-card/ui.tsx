import { useState } from "react";

import { determineIsInTargeting } from "processes/determin-is-in-targeting";
import { parseFormInfo } from "processes/parse-personalization-info";
import { checkMindboxSegment } from "processes/check-mindbox-segment";
import { Badge, Button, Card, Descriptions } from "antd";

import { FormCardProps } from "./model";
import { showBanner } from "pages/result-view-conteiner";

export const FormCard = ({ formInfo }: FormCardProps) => {
  const { targeting, views } = parseFormInfo(formInfo);
  const [isInTargeting, setIsInTargeting] = useState<boolean>(targeting?.length === 0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [segmentState, setSegmentState] = useState<boolean | undefined | null>(
    null
  );

  const handleCheckSegment = async () => {
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
    (views && <Button
      type="link"
      size="small"
      key="showINResult"
      disabled={!isInTargeting}
      onClick={() => showBanner(views.image)}
    >
      Показать
    </Button> )
  );

  const hasMindboxTargeting = () => {
    return (
      targeting &&
      targeting.length > 0 &&
      targeting[0].field === "mindbox_segment"
    );
  };

  return (
    <Card
      title={formInfo.name}
      actions={[
        hasMindboxTargeting() && checkSegmentButton(),
        showInResultBtn(),
      ]}
    >
      <Descriptions bordered size="small">
        {hasMindboxTargeting() ? (
          <>
            <Descriptions.Item label="Тип таргетинга" span={3}>
              Сегмент Mindbox
            </Descriptions.Item>

            <Descriptions.Item label="Должен быть в сегменте" span={3}>
              {targeting && targeting[0].value.inSegment ? "Да" : "Нет"}
            </Descriptions.Item>
            <Descriptions.Item
              label="Что делать, если не нашли клиента"
              span={3}
            >
              {targeting && targeting[0].value.inSegmentByDefault
                ? "Показывать"
                : "Не показывать"}
            </Descriptions.Item>
          </>
        ) : (
          <Descriptions.Item label="Тип таргетинга" span={3}>
            Показывать всем
          </Descriptions.Item>
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
