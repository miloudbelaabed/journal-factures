export default interface IDemandes {
  id: number;
  numInscription: string;

  nomComplet: string;

  dateNaissance: string;

  wilayaProjet: string;

  genre: string;

  situationProfessionnelle: string;

  revenueMensuel: number;

  expérienceProfessionnelle: number;

  situationFamiliale: string;

  nombreEnfants: number;

  noteTotale: number;

  statutDemande: string;
}
