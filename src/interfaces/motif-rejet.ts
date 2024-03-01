export interface IMotifRejet {
  id: number;
  motifRejetAr: string;
  motifRejetLt: string;
  traitementDemande: boolean;
  traitementDossierIncomplet: boolean;
  traitementDossier: boolean;
  traitementRecours: boolean;
  traitementDemandeDGP: boolean;
}
