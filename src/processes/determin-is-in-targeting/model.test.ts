import { determineIsInTargeting } from "./";

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


describe("isInTargeting should return TRUE", () => {
  test("inSegment true and In Mindbox Segment", async () => {
    const isInTargeting = determineIsInTargeting(
      createTargetingSettings({
        inSegment: true,
        inSegmentByDefault: true,
      }),
      true
    );

    expect(isInTargeting).toBe(true);
  });

  test("inSegment false and Not InMindbox Segment", async () => {
    const isInTargeting = determineIsInTargeting(
      createTargetingSettings({
        inSegment: false,
        inSegmentByDefault: true,
      }),
      false
    );

    expect(isInTargeting).toBe(true);
  });

  test("inSegmentByDefault false and No Mindbox User", async () => {
    const isInTargeting = determineIsInTargeting(
      createTargetingSettings({
        inSegment: true,
        inSegmentByDefault: true,
      }),
      undefined
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
      true
    );

    expect(isInTargeting).toBe(false);
  });

  test("inSegment false and Not InMindbox Segment", async () => {
    const isInTargeting = determineIsInTargeting(
      createTargetingSettings({
        inSegment: true,
        inSegmentByDefault: true,
      }),
      false
    );

    expect(isInTargeting).toBe(false);
  });

  test("inSegmentByDefault false and No Mindbox User", async () => {
    const isInTargeting = determineIsInTargeting(
      createTargetingSettings({
        inSegment: true,
        inSegmentByDefault: false,
      }),
      undefined
    );

    expect(isInTargeting).toBe(false);
  });
});
