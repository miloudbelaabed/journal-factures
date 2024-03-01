import { Dayjs } from "dayjs"

export interface ISetRdv {
  demandeId: number
  dateRdv: Dayjs
  plageId: number
  updateUser: string
}

export interface IRejet {
  demandeId: number
  avisId?: number
  motifRejetIds: number[]
  updateUser: string
}

export interface IConfirm {
  demandeId: number
  updateUser: string
}
