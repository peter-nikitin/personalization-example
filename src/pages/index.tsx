import { useState } from "react";

import { Row, Col, PageHeader } from "antd";

import { GetFormsInfo, PersonalizationData } from "pages/request-constructor";

import { ResultView, ShowResult } from "./result-view-conteiner";
import { StepsIndicator } from "entities/steps-indicator";

import { PersonalizationPreview } from "./preview-of-forms";


const PersonalizationTester = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const [resultView, setResultView] = useState("");

  const [personalizationData, setPersonalizationData] =
    useState<PersonalizationData>([]);

  const handleShowResult: ShowResult = (url) => {
    console.log(url);

    setResultView(url);
  };

  return (
    <>
      <Row>
        <Col flex="330px">
          <ResultView bannerImageUrl={resultView} />
        </Col>
        <Col flex="3">
          <PageHeader
            className="site-page-header"
            title="Пример персонализации приложения"
          />
          <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
            <Col flex="330px">
              <StepsIndicator currentStep={currentStep} />
            </Col>
            <Col flex="3">
              {currentStep === 0 && (
                <GetFormsInfo
                  updateFormsInfo={setPersonalizationData}
                  nextStep={() => setCurrentStep(1)}
                />
              )}

              {(currentStep === 1 || currentStep === 2) &&
                personalizationData && (
                  <PersonalizationPreview
                    forms={personalizationData}
                    showResult={handleShowResult}
                    nextStep={() => setCurrentStep(2)}
                  />
                )}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default PersonalizationTester;
