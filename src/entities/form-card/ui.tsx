import React, { useEffect, useState } from "react";
import { FormsEntity } from "processes/get-personalization-data/model";
import { determineIsInTargeting } from "features/determin-is-in-targeting";
import { parseFormInfo } from "features/parse-personalization-info";
import { checkMindboxSegment } from "processes/check-mindbox-segment";
import { Card, Col } from "antd";

type FormProps = {
  formInfo: FormsEntity;
};

export const FormCard = ({ formInfo }: FormProps) => {
  const [isInTargeting, setIsInTargeting] = useState<boolean>(false);
  const { targeting, views } = parseFormInfo(formInfo);

  useEffect(() => {
    if (targeting) {
      checkMindboxSegment(
        targeting[0].value.segmentation,
        targeting[0].value.operation
      ).then((data) => {
        setIsInTargeting(determineIsInTargeting(targeting[0], data));
        console.log(determineIsInTargeting(targeting[0], data));
      });
    }
  }, [formInfo]);

  return (
    <Col span={14} key={formInfo.id}>
      <Card title={formInfo.name} bordered={false}>
        Field: {targeting && targeting[0].field} <br />
        Segmentation: {targeting && targeting[0].value.segmentation}
        <br />
        Status: {isInTargeting!.toString()}
      </Card>
    </Col>
  );
};
