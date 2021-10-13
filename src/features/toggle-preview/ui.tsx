import { Radio } from "antd";
import { PREVIEW_MODS, TogglePreviewModeProps } from "./model";

export const TogglePreviewMode = ({
  changeMode,
  currentMode,
}: TogglePreviewModeProps) => {
  return (
    <Radio.Group
      options={Object.values(PREVIEW_MODS)}
      onChange={(event) => changeMode(event.target.value)}
      value={currentMode}
      optionType="button"
      buttonStyle="solid"
    />
  );
};
