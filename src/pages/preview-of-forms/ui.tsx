import { Row, Typography } from "antd";
import { FormsEntity } from "shared/api/get-personalization-data/model";
import { FormCard } from "entities/form-card";
import { TogglePreviewMode } from "features/toggle-preview";
import { PREVIEW_MODS } from "features/toggle-preview/model";
import React, { useState } from "react";

type FormsProps = {
  forms: FormsEntity[];
};

export const PersonalizationPreview = ({ forms }: FormsProps) => {
  const { Title } = Typography;

  const [previewMode, setPeviewMode] = useState(PREVIEW_MODS.parsed);
  //TODO: add toggler to component
  //TODO: add preview of raw content
  return (
    <div>
      <Title level={4}>Настроенные формы</Title>
      <TogglePreviewMode changeMode={setPeviewMode} currentMode={previewMode} />
      <Row gutter={16} wrap={true}>
        {forms.map((form) => (
          <FormCard key={form.id} formInfo={form} />
        ))}
      </Row>
    </div>
  );
};
