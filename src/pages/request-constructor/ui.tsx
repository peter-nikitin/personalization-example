import { Button, Form, Input, Typography } from "antd";

import {
  handleInputChange,
  submitted,
  $requestConstructorState,
} from "./model";

import { useStore } from "effector-react";

export const GetFormsInfo = () => {
  const formState = useStore($requestConstructorState);

  const { Text, Title } = Typography;

  return (
    <div>
      <Title level={4}>Настройки получения форм</Title>
      <Form layout="vertical" onFinish={submitted}>
        <Form.Item label="Идентификатор в попмеханиках">
          <Input
            placeholder="Идентификатор"
            value={formState.id}
            name="id"
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label="Домен приложения, указанный в настройках формы">
          <Input
            placeholder="Домен"
            name="domain"
            value={formState.domain}
            onChange={handleInputChange}
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
          {`https://web.popmechanic.ru/web/init/${formState.id}/?domain=${formState.domain}`}
        </Text>
      </div>
    </div>
  );
};
