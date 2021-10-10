import { NodesEntity } from "../forms-declaration";
import { MindboxAnswer } from "../mindbox-declarations";

const determineIsInTargeting = (
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
    const { segmentation } = mindboxAnswer.customerSegmentations[0];
    if (segmentation) {
      return true;
    } else {
      return false;
    }
  }

  return undefined;
};

export default determineIsInTargeting;
