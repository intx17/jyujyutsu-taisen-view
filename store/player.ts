import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

interface IPlayerStore {
  activeCommand: IPlayerStoreCommand | null
}

export interface IPlayerStoreCommand {
  name: string,
  attack: number
}

@Module({
  name: 'player',
  stateFactory: true,
  namespaced: true,
})
export default class PlayerStore extends VuexModule implements IPlayerStore {
  activeCommand: IPlayerStoreCommand | null = null;

  @Mutation
  setActiveCommand(command: IPlayerStoreCommand | null) {
    this.activeCommand = command;
  }
}
