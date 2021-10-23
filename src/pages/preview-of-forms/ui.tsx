import { Space, Typography } from "antd";
import { FormCard } from "entities/form-card";
import { TogglePreviewMode } from "features/toggle-preview";
import { PREVIEW_MODS } from "features/toggle-preview/model";
import { useState } from "react";
import { PreviewRaw } from "entities/preview-raw";
import { FormsProps } from "./model";



export const PersonalizationPreview = ({ forms, showResult, nextStep }: FormsProps) => {
  const { Title } = Typography;

  const [previewMode, setPreviewMode] = useState(PREVIEW_MODS.parsed);

  return (
    <Space direction="vertical">
      <TogglePreviewMode
        changeMode={setPreviewMode}
        currentMode={previewMode}
      />

      {previewMode === PREVIEW_MODS.parsed ? (
        <Space direction="vertical">
          {forms.map((form) => (
            <FormCard
              key={form.id}
              formInfo={form}
              showInResult={showResult}
              nextStep={nextStep}
            />
          ))}
        </Space>
      ) : (
        <PreviewRaw rawData={forms} />
      )}
    </Space>
  );
};
