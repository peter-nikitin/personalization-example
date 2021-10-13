import { useState } from "react";

import { Row, Col, PageHeader } from "antd";

import { GetFormsInfo, PersonalizationData } from "pages/request-constructor";
import { FormsEntity } from "shared/api/get-personalization-data/model";

import { ResultView } from "./result-view";
import { StepsIndicator } from "entities/steps-indicator";

import { Forms } from "shared/api/get-personalization-data";
import { PersonalizationPreview } from "./preview-of-forms";

const PersonalizationTester = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const [personalizationData, setPersonalizationData] =
    useState<PersonalizationData>([]);
  
  //TODO: add switched between steps 

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
              <GetFormsInfo updateFormsInfo={setPersonalizationData} />
              {personalizationData && (
                <PersonalizationPreview forms={personalizationData} />
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default PersonalizationTester;
