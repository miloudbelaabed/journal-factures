export interface IQuotaBudget {
  id: number;

  updated: boolean;
  wilayaId: number;
  key: string | number;
  quotaBudget: number;
  quota: number;
  wilayaText: string;
  directionId: number;
  directionText: string;
}
