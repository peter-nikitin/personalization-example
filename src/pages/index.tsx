import React, { useEffect, useState } from "react";

import { Row, Col, Skeleton, Steps, PageHeader } from "antd";

import { GetFormsInfo } from "pages/request-constructor";
import { FormsEntity } from "forms-declaration";
import { Forms } from "pages/preview-of-forms";
import ResultView from "./result-view/ui";

const PersonalizationTester = () => {
  const { Step } = Steps;

  const [currentStep, setCurrentStep] = useState<number>(1);

  const [forms, setForms] = useState<FormsEntity[]>([]);

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
              <Steps
                direction="vertical"
                current={currentStep}
                onChange={setCurrentStep}
              >
                <Step
                  title="Получить формы"
                  description="Получить список настроенных форм, выполнив GET запрос по адресу {pam-pam}"
                />
                <Step
                  title="Проверить таргетинг"
                  description="Для каждой формы может быть настрое натргетинг. Надо проверить, подходит ли пользователь под заданные условия"
                />
                <Step
                  title="Принять решение об отображении"
                  description="Если пользователь подходит под условия, надо отобразить ему настроенный контент"
                />
              </Steps>
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
