import { Row, Typography } from "antd";
import { FormsEntity } from "forms-declaration";
import { FormCard } from "entities/form-card";

type FormsProps = {
  forms: FormsEntity[];
};

export const Forms = ({ forms }: FormsProps) => {
  const { Title } = Typography;

  return (
    <div>
      <Title level={4}>Настроенные формы</Title>
      <Row gutter={16} wrap={true}>
        {forms.map((form) => (
          <FormCard key={form.id} formInfo={form} />
        ))}
      </Row>
    </div>
  );
};
