export interface IInfectedData {
  id: string
  content: string
  date: string
}

export interface IParsedInfectedData {
  sumInfectedNumber: number
  data47: {[key: string]: number}
}
