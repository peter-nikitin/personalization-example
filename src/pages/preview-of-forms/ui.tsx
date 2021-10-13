import { Row, Typography } from "antd";
import { FormCard } from "entities/form-card";
import { TogglePreviewMode } from "features/toggle-preview";
import { PREVIEW_MODS } from "features/toggle-preview/model";
import { useState } from "react";
import { PreviewRaw } from "entities/preview-raw";
import { FormsProps } from "./model";



export const PersonalizationPreview = ({ forms, showResult }: FormsProps) => {
  const { Title } = Typography;

  const [previewMode, setPreviewMode] = useState(PREVIEW_MODS.parsed);

  return (
    <div>
      <Title level={4}>Настроенные формы</Title>
      <TogglePreviewMode
        changeMode={setPreviewMode}
        currentMode={previewMode}
      />

      {previewMode === PREVIEW_MODS.parsed ? (
        <Row gutter={16} wrap={true}>
          {forms.map((form) => (
            <FormCard key={form.id} formInfo={form} showInResult={showResult} />
          ))}
        </Row>
      ) : (
        <PreviewRaw rawData={forms} />
      )}
    </div>
  );
};
