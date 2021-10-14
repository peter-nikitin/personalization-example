import { parseFormInfo } from "features/parse-personalization-info";
import mockAnswer from "shared/config/mockFormsAnswer.json";

test("should return parsed form info", () => {
  const { targeting, views } = parseFormInfo(mockAnswer.forms[0]);

  expect(targeting).toStrictEqual(
    mockAnswer.forms[0].new_targeting.filter.nodes
  );
  expect(views).toStrictEqual(mockAnswer.forms[0].settings_splits[0].settings);
});
