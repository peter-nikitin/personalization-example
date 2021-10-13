import { FormsEntity } from "shared/api/get-personalization-data/model";



export const parseFormInfo = (form: FormsEntity) => {
  const targeting = form.new_targeting.filter.nodes;

  const views = form.settings_splits![0].settings;

  return {
    targeting,
    views,
  };
};

