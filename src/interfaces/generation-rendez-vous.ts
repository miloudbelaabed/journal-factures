import { Dayjs } from 'dayjs';

export interface IPlageHeurs {
  dateDebut: Dayjs;
  dateFin: Dayjs;
  nbrJourOuvert: number;
  wilayasSchedules: [
    {
      wilayaId: number;
      wilayaName: string;
      daysSchedule: [
        {
          day: Dayjs;
          demandes: [
            {
              id: number;
              numInscription: number;
              dateRdv: number;
              plageHeureRdvid: number;
              plageHeureRdName: string;
            }
          ];
        }
      ];
    }
  ];
}
export interface IPlageHeursList {
  nbrJourOuvert: number;
  wilayasSchedules: [
    {
      wilayaId: number;
      wilayaName: string;
      daysSchedule: [
        {
          day: Dayjs;
          demandes: [
            {
              id: number;
              numInscription: number;
              dateRdv: number;
              plageHeureRdvid: number;
              plageHeureRdName: string;
            }
          ];
        }
      ];
    }
  ];
}
