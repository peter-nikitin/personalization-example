import { Space } from "antd";
import { FormCard } from "entities/form-card";
import { TogglePreviewMode } from "features/toggle-preview";
import { PREVIEW_MODS } from "features/toggle-preview/model";
import { useState } from "react";
import { PreviewRaw } from "entities/preview-raw";
import { FormsProps } from "./model";
import { useStore } from "effector-react";
import { $personalizationData } from "entities/personalization-data";



export const PersonalizationPreview = ({ showResult }: FormsProps) => {

  const forms = useStore($personalizationData);

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
            />
          ))}
        </Space>
      ) : (
        <PreviewRaw rawData={forms} />
      )}
    </Space>
  );
};
