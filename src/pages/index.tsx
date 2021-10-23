import { useState } from "react";

import { Row, Col, PageHeader } from "antd";

import { GetFormsInfo, PersonalizationData } from "pages/request-constructor";

import { ResultView, ShowResult } from "./result-view-conteiner";
import { StepsIndicator } from "entities/steps-indicator";

import { PersonalizationPreview } from "./preview-of-forms";
import { Header } from "shared/header";
import { useStore } from "effector-react";
import { $stepIndex } from "entities/steps-indicator/model";

const PersonalizationTester = () => {
  const stepIndex = useStore($stepIndex);

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
              <StepsIndicator />
            </Col>
            <Col flex="3">
              <Header />
              {stepIndex === 0 && <GetFormsInfo />}

              {(stepIndex === 1 || stepIndex === 2) && personalizationData && (
                <PersonalizationPreview showResult={setResultView} />
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default PersonalizationTester;
