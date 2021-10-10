export interface MindboxAnswer {
  status: string;
  customerSegmentations?: CustomerSegmentationsEntity[] | null;
}
export interface CustomerSegmentationsEntity {
  segmentation?: SegmentationOrSegment;
  segment?: SegmentationOrSegment;
}
export interface SegmentationOrSegment {
  ids: Ids;
}
export interface Ids {
  externalId: string;
}
