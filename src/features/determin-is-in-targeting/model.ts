import { NodesEntity } from "shared/api/get-personalization-data/model";
import { MindboxAnswer } from "mindbox-declarations";

export const determineIsInTargeting = (
  targetingSettings: NodesEntity,
  mindboxAnswer: any
): boolean => {
  const { inSegment, inSegmentByDefault } = targetingSettings.value;

  const isInSegmentInMindbox = isInMindboxSegment(mindboxAnswer);

  if (isInSegmentInMindbox === undefined && inSegmentByDefault) {
    return true;
  } else if (inSegment && isInSegmentInMindbox) {
    return true;
  } else if (!inSegment && !isInSegmentInMindbox) {
    return true;
  }
  return false;
};

export const isInMindboxSegment = (
  mindboxAnswer: MindboxAnswer
): boolean | undefined => {
  if (mindboxAnswer.customerSegmentations) {
    const { segment } = mindboxAnswer.customerSegmentations[0];
    if (segment) {
      return true;
    } else {
      return false;
    }
  }

  return undefined;
};

