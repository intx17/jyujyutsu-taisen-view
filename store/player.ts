import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { JapaneseWoeid } from '~/src/enums/japanese-woeid';

interface IPlayerStore {
  player: IPlayer | null
  activeCommand: IPlayerStoreCommand | null
}

interface IPlayer {
  id: string
  hp: number
  prefecture: string
}

export interface IPlayerStoreCommand {
  name: string
  attack: number
}

@Module({
  name: 'player',
  stateFactory: true,
  namespaced: true,
})
export default class PlayerStore extends VuexModule implements IPlayerStore {
  player: IPlayer | null = null;
  activeCommand: IPlayerStoreCommand | null = null;

  @Mutation
  setPlayer(player: IPlayer | null) {
    this.player = player;
  }

  @Mutation
  setActiveCommand(command: IPlayerStoreCommand | null) {
    this.activeCommand = command;
  }
}