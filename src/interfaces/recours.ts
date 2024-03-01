import { Dayjs } from 'dayjs';

export interface IRecoursList {
  id: number;
  numeroInscription: string;
  nomComplet: string;
  dateNaissance: Dayjs;
  wilayaProjet: string;
  justification: string;
  lienFichierDeJustification: string;
  statutRecours: number;
}
