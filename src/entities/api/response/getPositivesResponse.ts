export interface GetPositivesResponse {
  result: string,
  positives: {
    prefecture: string,
    latestPositives: number,
  }
}
