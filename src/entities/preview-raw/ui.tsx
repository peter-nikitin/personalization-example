import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";
import { PreviewRawProps } from "./model";

export const PreviewRaw = ({ rawData }: PreviewRawProps) => {
  const valueFormPreview =
    rawData.length > 0 ? JSON.stringify(rawData, null, 2) : "";

  return (
    <AceEditor
      mode="json"
      theme="github"
      value={valueFormPreview}
      name="PREVIEW_RAW_PERSONALIZATION_DATA"
      editorProps={{ $blockScrolling: true }}
    />
  );
};
