import { IBattle } from './battle'
import { ICommand } from './command'
import { JapaneseWoeid } from '~/src/enums/japanese-woeid'

interface IPlayerBattles {
  items: IBattle[]
}
interface IPlayerCommands {
  items: ICommand[]
}
export interface IPlayer {
  id: string
  name: string
  maxHP: number
  woeid: JapaneseWoeid
  prefecture: string
  commands: IPlayerCommands
  battles: IPlayerBattles
}
