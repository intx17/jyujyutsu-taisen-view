import { JapaneseWoeid } from "~/src/enums/japanese-woeid";

export interface Player {
  id: string
  name: string
  hp: number
  woeid: JapaneseWoeid
  commands: any[]
  battles: any[]
}

export interface GetPlayerResponse {
  data: {
    getPlayer: {
      items: Player[]
    }
  }
}
