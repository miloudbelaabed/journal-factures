import { IWilaya } from '../types/types';

type IWilayas = IWilaya[] | number[];
export interface IDirection {
  id: number;
  nomDirectionLt: string;
  nomDirectionAr: string;
  description: string;
  codeDirection: string;
  typeDirection: string;
  adresseLt: string;
  wilayas: IWilayas;
}
