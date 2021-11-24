import { Row, Col, PageHeader } from "antd";

import { GetFormsInfo } from "pages/request-constructor";
import { ResultView } from "./result-view-conteiner";
import { $stepIndex, StepsIndicator } from "entities/steps-indicator";
import { PersonalizationPreview } from "./preview-of-forms";

import { Header } from "shared/header";

import { useStore } from "effector-react";

const PersonalizationTester = () => {
  const stepIndex = useStore($stepIndex);

  return (
    <>
      <Row>
        <Col flex="330px">
          <ResultView />
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

              {(stepIndex === 1 || stepIndex === 2) && (
                <PersonalizationPreview  />
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default PersonalizationTester;
