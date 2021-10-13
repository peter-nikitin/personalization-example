import  {
  isInMindboxSegment, 
} from "./model";

const mockInMindboxSegment = {
  status: "Success",
  customerSegmentations: [
    {
      segmentation: {
        ids: {
          externalId: "fed6e820-45a8-4b8b-85d5-097e6ffbb2f6",
        },
      },
      segment: {
        ids: {
          externalId: "fed6e820-45a8-4b8b-85d5-097e6ffbb2f6",
        },
      },
    },
  ],
};

const mockNotInMindboxSegment = {
  status: "Success",
  customerSegmentations: [
    {
      segmentation: {
        ids: {
          externalId: "fed6e820-45a8-4b8b-85d5-097e6ffbb2f6",
        },
      },
    },
  ],
};

const mockNoMindboxUser = {
  status: "Success",
};



describe("Test of inMindboxSegment function", () => {
  test("should return TRUE if in segment", () => {
    expect(isInMindboxSegment(mockInMindboxSegment)).toBe(true);
  });
  test("should return false if NOT in segment", () => {
    expect(isInMindboxSegment(mockNotInMindboxSegment)).toBe(false);
  });
  test("should return undefined if customer not fund", () => {
    expect(isInMindboxSegment(mockNoMindboxUser)).toBe(undefined);
  });
});
