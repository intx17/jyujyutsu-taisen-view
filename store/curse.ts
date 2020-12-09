import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { ICurse } from '~/src/graphql/domain/curse'

interface ICurseStore {
  curse: ICurse | null
  shaking: boolean
}
@Module({
  name: 'curse',
  stateFactory: true,
  namespaced: true
})
export default class CurseStore extends VuexModule implements ICurseStore {
  curse: ICurse | null = null

  shaking: boolean = false

  @Mutation
  setCurse (curse: ICurse) {
    this.curse = curse
  }

  @Mutation
  setShaking (isShaking: boolean) {
    this.shaking = isShaking
  }
}
