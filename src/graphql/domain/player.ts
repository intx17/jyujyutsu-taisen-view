import { JapaneseWoeid } from "~/src/enums/japanese-woeid";

export interface Player {
  id: string
  name: string
  hp: number
  woeid: JapaneseWoeid
  prefecture: string
  commands: any[]
  battles: any[]
}

export interface GetPlayerResponse {
  data: {
    getPlayer: Player
  }
}
