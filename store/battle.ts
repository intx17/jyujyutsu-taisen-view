import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { IBattle } from '~/src/graphql/domain/battle'

interface IBattleStore {
    battleInProgress: IBattle | null
    battleInProgressHistories: string[]
    shakeCurseImage: boolean
    isAreaExpansion: boolean
    isTrendsDialogOpen: boolean
}

@Module({
  name: 'battle',
  stateFactory: true,
  namespaced: true
})
export default class BattleStore extends VuexModule implements IBattleStore {
  battleInProgress: IBattle | null = null
  battleInProgressHistories: string[] = []
  shakeCurseImage = false
  isAreaExpansion = false
  isTrendsDialogOpen = false

  @Mutation
  setBattleInProgress (battle: IBattle | null) {
    if (battle) {
      const histories = battle?.histories.replace(/"/g, '')
        .split('\\n')
        .filter(s => !!s) ?? []
      this.battleInProgressHistories = histories
    }
    this.battleInProgress = battle
  }

  @Mutation
  setBattleInProgressHistories (histories: string[]) {
    this.battleInProgressHistories = histories
  }

  @Mutation
  setPlayerHP (hp: number) {
    const copied: IBattle = JSON.parse(JSON.stringify(this.battleInProgress))
    copied.playerHP = hp
    this.battleInProgress = copied
  }

  @Mutation
  setShakeCurseImage (shake: boolean) {
    this.shakeCurseImage = shake
  }

  @Mutation
  setIsAreaExpansion (isAreaExpansion: boolean) {
    this.isAreaExpansion = isAreaExpansion
  }

  @Mutation
  setIsTrendsDialogOpen (isOpen: boolean) {
    this.isTrendsDialogOpen = isOpen
  }
}
