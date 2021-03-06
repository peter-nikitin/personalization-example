import { getData } from "./getData";
import axios from "axios";

import mockAnswer from "shared/config/mockFormsAnswer.json";

jest.mock("axios");
const prepareMock = (answer: any) => {
  (axios.get as jest.Mock).mockResolvedValue({
    status: 200,
    data: answer,
  });
};

test("should return array of forms", async () => {
  prepareMock(mockAnswer);

  const forms = await getData({ id: "112", domain: "myUrl" });

  expect(forms).toStrictEqual(mockAnswer.forms);
});

test("should return empty array", async () => {
  prepareMock({ ...mockAnswer, forms: [] });

  const forms = await getData({ id: "112", domain: "myUrl" });


  expect(forms).toStrictEqual([]);
});

test("should return undefined if no forms field", async () => {
  const { forms, ...restFields } = mockAnswer;

  prepareMock({ ...restFields });

  const result = await getData({ id: "112", domain: "myUrl" });

  expect(result).toStrictEqual([]);
});
