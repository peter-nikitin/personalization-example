import React, { useState } from "react";

import { determineIsInTargeting } from "processes/determin-is-in-targeting";
import { parseFormInfo } from "features/parse-personalization-info";
import { checkMindboxSegment } from "processes/check-mindbox-segment";
import { Card, Col } from "antd";

import { AimOutlined, DesktopOutlined } from "@ant-design/icons";
import { FormCardProps } from "./model";

export const FormCard = ({ formInfo, showInResult }: FormCardProps) => {
  const [isInTargeting, setIsInTargeting] = useState<boolean>(false);
  const { targeting, views } = parseFormInfo(formInfo);

  const [segmentState, setSegmentState] = useState<boolean | undefined>();

  const handleCheckSegment = () => {
    if (targeting) {
      const [firstTargetingNode, ...rest] = targeting;

      const { segmentation, operation } = firstTargetingNode.value;

      checkMindboxSegment(segmentation, operation).then((result) => {
        setSegmentState(result);
        setIsInTargeting(determineIsInTargeting(firstTargetingNode, result));
      });
    }
  };

  return (
    <Col span={14} key={formInfo.id}>
      <Card
        title={formInfo.name}
        bordered={false}
        actions={[
          <AimOutlined key="checkSegment" onClick={handleCheckSegment} />,
          <DesktopOutlined
            key="showINResult"
            onClick={() => showInResult(views.image)}
          />,
        ]}
      >
        Field: {targeting && targeting[0].field} <br />
        Segmentation: {targeting && targeting[0].value.segmentation}
        Segmentation status:{" "}
        {segmentState === undefined
          ? "Не найден в Mindbox"
          : segmentState
          ? "В сегменте"
          : "Не в сегменте"}
        <br />
        Is in targeting: {isInTargeting!.toString()}
      </Card>
    </Col>
  );
};
