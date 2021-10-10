import determineIsInTargeting, {
  isInMindboxSegment,
} from "./determineIsInTargeting";

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
      segment: {
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

type createTargetingSettingsArgs = {
  inSegment: boolean;
  inSegmentByDefault: boolean;
};

const createTargetingSettings = ({
  inSegment,
  inSegmentByDefault,
}: createTargetingSettingsArgs) => ({
  id: "2",
  field: "mindbox_segment",
  value: {
    auto: true,
    inSegment,
    operation: "popmechanic-check-segment-31627",
    segmentation: "74f45d0a-6f1e-4e77-bd9f-eefe9f4b43b0",
    inSegmentByDefault,
  },
  operator: "$check",
});

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

describe("isInTargeting should return TRUE", () => {
  test("inSegment true and In Mindbox Segment", async () => {
    const isInTargeting = determineIsInTargeting(
      createTargetingSettings({
        inSegment: true,
        inSegmentByDefault: true,
      }),
      mockInMindboxSegment
    );

    expect(isInTargeting).toBe(true);
  });

  test("inSegment false and Not InMindbox Segment", async () => {
    const isInTargeting = determineIsInTargeting(
      createTargetingSettings({
        inSegment: false,
        inSegmentByDefault: true,
      }),
      mockNotInMindboxSegment
    );

    expect(isInTargeting).toBe(true);
  });

  test("inSegmentByDefault false and No Mindbox User", async () => {
    const isInTargeting = determineIsInTargeting(
      createTargetingSettings({
        inSegment: true,
        inSegmentByDefault: true,
      }),
      mockNoMindboxUser
    );

    expect(isInTargeting).toBe(true);
  });
});

describe("isInTargeting should return FALSE", () => {
  test("inSegment true and In Mindbox Segment", async () => {
    const isInTargeting = determineIsInTargeting(
      createTargetingSettings({
        inSegment: false,
        inSegmentByDefault: true,
      }),
      mockInMindboxSegment
    );

    expect(isInTargeting).toBe(false);
  });

  test("inSegment false and Not InMindbox Segment", async () => {
    const isInTargeting = determineIsInTargeting(
      createTargetingSettings({
        inSegment: true,
        inSegmentByDefault: true,
      }),
      mockNotInMindboxSegment
    );

    expect(isInTargeting).toBe(false);
  });

  test("inSegmentByDefault false and No Mindbox User", async () => {
    const isInTargeting = determineIsInTargeting(
      createTargetingSettings({
        inSegment: true,
        inSegmentByDefault: false,
      }),
      mockNoMindboxUser
    );

    expect(isInTargeting).toBe(false);
  });
});
