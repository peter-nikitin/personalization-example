import { FormsEntity } from "forms-declaration";

export const parseFormInfo = (form: FormsEntity) => {
  const targeting = form.new_targeting.filter.nodes;

  const views = form.settings_splits![0].settings;

  return {
    targeting,
    views,
  };
};

