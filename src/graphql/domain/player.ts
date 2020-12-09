import { JapaneseWoeid } from "~/src/enums/japanese-woeid";

export interface IPlayer {
  id: string
  name: string
  hp: number
  woeid: JapaneseWoeid
  prefecture: string
  commands: any[]
  battles: any[]
}
