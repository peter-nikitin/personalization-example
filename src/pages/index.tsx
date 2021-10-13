import { useState } from "react";

import { Row, Col, PageHeader } from "antd";

import { GetFormsInfo, PersonalizationData } from "pages/request-constructor";

import { ResultView, ShowResult } from "./result-view-conteiner";
import { StepsIndicator } from "entities/steps-indicator";

import { PersonalizationPreview } from "./preview-of-forms";
import { SimpleInlineBanner } from "entities/result-vews";

const PersonalizationTester = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const [resultView, setResultView] = useState("");

  const [personalizationData, setPersonalizationData] =
    useState<PersonalizationData>([]);

  //TODO: add switched between steps

  const handleShowResult: ShowResult = (url) => {
    console.log(url);

    setResultView(url);
  };

  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
        <Col span={8}>
          <ResultView bannerImageUrl={resultView} />
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
                <PersonalizationPreview
                  forms={personalizationData}
                  showResult={handleShowResult}
                />
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default PersonalizationTester;
