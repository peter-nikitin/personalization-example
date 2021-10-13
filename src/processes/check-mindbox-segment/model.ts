export interface MindboxAnswer {
  status: string;
  customerSegmentations?: CustomerSegmentationsEntity[] | null;
}
interface CustomerSegmentationsEntity {
  segmentation?: SegmentationOrSegment;
  segment: SegmentationOrSegment;
}
interface SegmentationOrSegment {
  ids: Ids;
}
interface Ids {
  externalId: string;
}

export const checkMindboxSegment = (segmentId: string, operation: string) => {
  return new Promise<MindboxAnswer>((resolve, reject) => {
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
        resolve(response);
      },
      onValidationError: function (messages: any) {
        reject(messages);
      },
      onError: function (error: any) {
        reject(error);
      },
    });
  });
};
