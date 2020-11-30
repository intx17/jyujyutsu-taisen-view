import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

interface IAuthStore {
  isLoggedIn: boolean
}

@Module({
  name: 'auth',
  stateFactory: true,
  namespaced: true,
})
export default class AuthStore extends VuexModule implements IAuthStore {
  isLoggedIn: boolean = false;

  @Mutation
  setIsLoggedIn(loggedIn: boolean) {
    this.isLoggedIn = loggedIn;
  }
}
