export interface Covid19Positive {
  id: string,
  content: string,
  date: string
}

export interface ParsedPositives {
  data47: {[key: string]: number}
}

export interface ListCovid19Response {
  data: {
    listCovid19Positives: {
      items: Covid19Positive[]
    }
  }
}
