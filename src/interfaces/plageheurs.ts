export interface IPlageHeurs {
  id: number;
  periode: string;
  heureDebut: string;
  heureFin: string;
  nombreHeures: number;
  moyenTraitementDossier: number;
}
export interface ICreatePlagesHeurs {
  id?: number;
  periode: string;
  heureDebut: number;
  minDebut: number;
  heureFin: number;
  minFin: number;
}
