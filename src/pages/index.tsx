import { useState } from "react";

import { Row, Col, PageHeader } from "antd";

import { GetFormsInfo } from "pages/request-constructor";
import { FormsEntity } from "shared/api/get-personalization-data/model";

import ResultView from "./result-view/ui";
import { StepsIndicator } from "entities/steps-indicator";

import { Forms } from "shared/api/get-personalization-data";

const PersonalizationTester = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const [personalizationData, setPersonalizationData] = useState<{
    parsed: FormsEntity[];
    raw: Forms;
  }>();

  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
        <Col span={8}>
          <ResultView />
        </Col>
        <Col span={16}>
          <PageHeader
            className="site-page-header"
            title="Пример персонализации приложения"
          />
          <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
            <Col span={8}>
              <StepsIndicator currentStep={currentStep} />
            </Col>
            <Col span={16}>
              <GetFormsInfo updateFormsInfo={setForms} />
              {forms && <Forms forms={forms} />}
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default PersonalizationTester;
