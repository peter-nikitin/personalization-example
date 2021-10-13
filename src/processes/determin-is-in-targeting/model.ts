import { NodesEntity } from "processes/get-personalization-data/model";

export const determineIsInTargeting = (
  targetingSettings: NodesEntity,
  mindboxAnswer: boolean | undefined
): boolean => {
  const { inSegment, inSegmentByDefault } = targetingSettings.value;

  if (mindboxAnswer === undefined && inSegmentByDefault) {
    return true;
  } else if (inSegment && mindboxAnswer) {
    return true;
  } else if (!inSegment && !mindboxAnswer) {
    return true;
  }
  return false;
};
