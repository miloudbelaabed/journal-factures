import { Dayjs } from 'dayjs';

export interface IPeriodeRendezVous {
  id: number;
  datePremierRdv: Dayjs;
  dateDernierRdv: Dayjs;
  nombreJoursOuvres: number;
}
export interface IUpdatePeriodeRendezVous {
  datePremierRdv: Dayjs;
  dateDernierRdv: Dayjs;
}
