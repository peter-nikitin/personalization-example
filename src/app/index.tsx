import React, { useEffect, useState } from "react";
import "./App.css";
import "antd/dist/antd.css";

import { Row, Col, Skeleton, Steps, PageHeader } from "antd";

import "html5-device-mockups/dist/device-mockups.css";
import GetFormsInfo from "GetFormsInfo";
import { FormsEntity } from "forms-declaration";
import Forms from "Forms";

declare global {
  interface Window {
    mindbox: any;
  }
}

function App() {
  useEffect(() => {
    window.mindbox =
      window.mindbox ||
      function () {
        window.mindbox.queue.push(arguments);
      };
    window.mindbox.queue = window.mindbox.queue || [];
    window.mindbox("create", {
      endpointId: "wpush-test",
    });

    var script = document.createElement("script");
    script.src = "https://api.mindbox.ru/scripts/v1/tracker.js";
    document.getElementsByTagName("head")[0].appendChild(script);

    
  }, []);

  const { Step } = Steps;

  const [currentStep, setCurrentStep] = useState<number>(1);

  const [forms, setForms] = useState<FormsEntity[]>([]);

  return (
    <div className="App">
      <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
        <Col span={8}>
          <div className="device-wrapper">
            <div
              className="device"
              data-device="iPhone7"
              data-orientation="portrait"
              data-color="black"
            >
              <div
                className="screen"
                style={{ backgroundColor: "white", padding: "15px 10px" }}
              >
                <Skeleton />
              </div>
              <div className="button">
                {/* <!-- You can hook the "home button" to some JavaScript events or just remove it --> */}
              </div>
            </div>
          </div>
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
}

export default App;
