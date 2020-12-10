import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { IBattle } from '~/src/graphql/domain/battle'
import { ICurse } from '~/src/graphql/domain/curse'

interface IBattleStore {
    battleInProgress: IBattle | null
    battleInProgressHistories: string[]
    curse: ICurse | null
    shakeCurseImage: boolean
    isAreaExpansion: boolean
}

@Module({
  name: 'battle',
  stateFactory: true,
  namespaced: true
})
export default class BattleStore extends VuexModule implements IBattleStore {
  battleInProgress: IBattle | null = null
  battleInProgressHistories: string[] = []
  curse: ICurse | null = null
  shakeCurseImage = false
  isAreaExpansion = false

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
  setCurse (curse: ICurse | null) {
    this.curse = curse
  }

  @Mutation
  setShakeCurseImage (shake: boolean) {
    this.shakeCurseImage = shake
  }

  @Mutation
  setIsAreaExpansion (isAreaExpansion: boolean) {
    this.isAreaExpansion = isAreaExpansion
  }
}
