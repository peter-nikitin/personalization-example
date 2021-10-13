type Keys = keyof typeof PREVIEW_MODS;
type Values = typeof PREVIEW_MODS[Keys];

export type TogglePreviewModeProps = {
  currentMode: Values;
  changeMode: React.Dispatch<React.SetStateAction<Values>>;
};

export const PREVIEW_MODS = {
  parsed: "parsed",
  raw: "raw",
};
