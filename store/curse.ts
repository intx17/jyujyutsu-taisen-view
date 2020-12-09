import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

interface ICurseStore {
  shaking: boolean
}

@Module({
  name: 'curse',
  stateFactory: true,
  namespaced: true
})
export default class CurseStore extends VuexModule implements ICurseStore {
  shaking: boolean = false;

  @Mutation
  setShaking (isShaking: boolean) {
    this.shaking = isShaking
  }
}
