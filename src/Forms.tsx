import { Card, Col, Row, Typography, Divider } from "antd";
import React from "react";
import { StringMappingType } from "typescript";
import { FormsEntity } from "./forms-declaration";
import parseFormInfo from "./utils/parseFormInfo";
import FormCard from "./FormCard";

import determineIsInTargeting from "./utils/determineIsInTargeting";

type FormsProps = {
  forms: FormsEntity[];
};

const Forms = ({ forms }: FormsProps) => {
  const { Title } = Typography;

  return (
    <div>
      <Title level={4}>Настроенные формы</Title>
      <Row gutter={16} wrap={true}>
        {forms.map((form) => (
          <FormCard key={form.id} formInfo={form} />
        ))}
      </Row>
    </div>
  );
};

export default Forms;
