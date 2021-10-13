import { Button, Form, Input, Typography } from "antd";
import { useState } from "react";

import { getData } from "processes/get-personalization-data";
import { FormState, GetFormsInfoProps } from "./model";

export const GetFormsInfo = ({
  updateFormsInfo,
  nextStep,
}: GetFormsInfoProps) => {
  const [formState, setFormState] = useState<FormState>({
    id: "",
    domain: "",
  });
  const onFinish = (values: any) => {
    getData(formState.id, formState.domain)
      .then((data) => {
        console.log("Success:", data);
        if (data) {
          updateFormsInfo(data);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => nextStep());
  };

  const { Text, Title } = Typography;

  return (
    <div>
      <Title level={4}>Настройки получения форм</Title>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item label="Идентификатор в попмеханиках">
          <Input
            placeholder="Идентификатор"
            value={formState.id}
            onChange={(event) =>
              setFormState({ ...formState, id: event.target.value })
            }
          />
        </Form.Item>
        <Form.Item label="Домен приложения, указанный в настройках формы">
          <Input
            placeholder="Домен"
            value={formState.domain}
            onChange={(event) =>
              setFormState({ ...formState, domain: event.target.value })
            }
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Получить настройки форм
          </Button>
        </Form.Item>
      </Form>
      <div>
        <Title level={4}>URL запроса инфомрации о формах</Title>
        <Text code style={{ whiteSpace: "nowrap" }}>
          {`https://web.popmechanic.ru/web/init/${formState.id}/?domain=$${formState.domain}`}
        </Text>
      </div>
    </div>
  );
};
