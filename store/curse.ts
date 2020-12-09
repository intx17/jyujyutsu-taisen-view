import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

interface ICurse {
  hp: number
  maxHP: number
}
interface ICurseStore {
  curse: ICurse
  shaking: boolean
}

@Module({
  name: 'curse',
  stateFactory: true,
  namespaced: true
})
export default class CurseStore extends VuexModule implements ICurseStore {
  curse: ICurse = {
    hp: 0,
    maxHP: 100
  }

  shaking: boolean = false

  @Mutation
  setCurse (curse: ICurse) {
    this.curse = curse
  }

  @Mutation
  setCurseHP (hp: number) {
    const copied: ICurse = JSON.parse(JSON.stringify(this.curse))
    copied.hp = hp
    this.curse = copied
  }

  @Mutation
  setCurseMaxHP (hp: number) {
    const copied: ICurse = JSON.parse(JSON.stringify(this.curse))
    copied.maxHP = hp
    this.curse = copied
  }

  @Mutation
  setShaking (isShaking: boolean) {
    this.shaking = isShaking
  }
}
