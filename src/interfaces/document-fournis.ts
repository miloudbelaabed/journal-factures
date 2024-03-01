export interface IDocument {
  id: number;
  documentId: number;
  nomDocumentLt: string;
  nomDocumentAr: string;
  fourni: boolean;
  remarque: string;
}

export interface IDocumentFournis {
  demandeId: number;
  userName:string;
  documentFournis: IDocument[];
}
