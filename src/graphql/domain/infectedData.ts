export interface InfectedData {
  id: string
  content: string
  date: string
}

export interface ParsedInfectedData {
  sumInfectedNumber: number
  data47: {[key: string]: number}
}

export interface ListInfectedDatasResponse {
  data: {
    listInfectedDatas: {
      items: InfectedData[]
    }
  }
}
