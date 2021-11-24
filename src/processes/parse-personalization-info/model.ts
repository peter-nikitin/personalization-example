import { FormsEntity } from "processes/get-personalization-data/model";

export const parseFormInfo = (form: FormsEntity) => {
  let views;

  const targeting = form.new_targeting?.filter?.nodes;
  
  if (form && form.settings_splits && form.settings_splits[0]) {
    views = form.settings_splits[0].settings;
  }

  return {
    targeting,
    views,
  };
};
