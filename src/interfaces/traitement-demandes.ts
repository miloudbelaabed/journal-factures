import { Dayjs } from "dayjs"
import { IMotifRejet } from "./motif-rejet"

export interface ITraitementDemandes {
  id: number
  numInscription: string
  demandeurId: number
  demandeId: number
  nom: string
  prenom: string
  // dateNaissance: Dayjs;
  statutDemande?: number
  statutRecours?: number
  noteAncienneteProfessionnelle: number
  noteRevenuMenage: number
  noteSituationFamiliale: number
  noteDateDecisionCNL: number
  noteTotale: number
  classement: number
  motifRejetIds?: number[]
  hidden?: boolean
  motifRejets?: IMotifRejet[]
  traiteePar: string | null
  wilayaProjet: string | null
  wilayaProjetId?: number
  dateDecisionCnl: Dayjs
  dateRdv: Dayjs
  dateDelivancePermisConstruction: Dayjs
  numDecisionCnl: string
  recoursExiste: boolean
  dateCreation: Dayjs
  statutDossier: number
  verrouillageDossierDemande: boolean
  verrouillageDossierDemandeDGP: boolean
  verrouillageDossierIncomplet: boolean
  verrouillageRecours: boolean
  verificationDGPStatutDemande: number
  verificationDGPVerrouillage?: boolean
}

export interface INotes {
  demandeId: number
  noteAncienneteProfessionnelle: number
  anneeExperienceProfessionnelle: number
  moisExperienceProfessionnelle: number
  noteRevenuMenage: number
  revenuMensuelDemandeur: number
  revenuMensuelConjoint: number
  noteSituationFamiliale: number
  situationFamiliale: number
  nbrEnfants: number | null
  nbrEnfantsMoins30Ans: number | null
  noteDateDecisionCnl: number
  dateDecisionCnl: Dayjs
  noteTotale: number
  updateUser: string
}
export interface IUpdateDemandeStatus {
  demandeId: number
  stateId: number
  motifRejetId: number
  updateUser: string
}
