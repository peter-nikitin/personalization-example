export interface MindboxAnswer {
  status: string;
  customerSegmentations?: CustomerSegmentationsEntity[] | null;
}
interface CustomerSegmentationsEntity {
  segmentation: SegmentationOrSegment;
  segment?: SegmentationOrSegment;
}
interface SegmentationOrSegment {
  ids: Ids;
}
interface Ids {
  externalId: string;
}

export const checkMindboxSegment = (segmentId: string, operation: string) => {
  return new Promise<ReturnType<typeof isInMindboxSegment>>(
    (resolve, reject) => {
      window.mindbox("sync", {
        operation,
        data: {
          segmentations: [
            {
              ids: {
                externalId: segmentId,
              },
            },
          ],
        },
        onSuccess: function (response: any) {
          resolve(isInMindboxSegment(response));
        },
        onValidationError: function (messages: any) {
          reject(messages);
        },
        onError: function (error: any) {
          reject(error);
        },
      });
    }
  );
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
