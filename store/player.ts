import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { ICommand } from '~/src/graphql/domain/command'

interface IPlayer {
  id: string
  hp: number
  maxHP: number
  prefecture: string
}

interface IPlayerStore {
  player: IPlayer | null
  activeCommand: ICommand | null
  selectedCommands: ICommand[]
}

@Module({
  name: 'player',
  stateFactory: true,
  namespaced: true
})
export default class PlayerStore extends VuexModule implements IPlayerStore {
  player: IPlayer | null = null
  activeCommand: ICommand | null = null
  selectedCommands: ICommand[] = []

  @Mutation
  setPlayer (player: IPlayer | null) {
    this.player = player
  }

  @Mutation
  setPlayerHP (hp: number) {
    const copied: IPlayer = JSON.parse(JSON.stringify(this.player))
    copied.hp = hp
    this.player = copied
  }

  @Mutation
  setPlayerMaxHP (hp: number) {
    const copied: IPlayer = JSON.parse(JSON.stringify(this.player))
    copied.maxHP = hp
    this.player = copied
  }

  @Mutation
  setActiveCommand (command: ICommand | null) {
    this.activeCommand = command
  }

  @Mutation
  setSelectedCommands (commands: ICommand[]) {
    this.selectedCommands = commands
  }
}
