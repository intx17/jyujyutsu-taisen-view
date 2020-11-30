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

  get loggedIn () {
    return this.isLoggedIn;
  }

  @Mutation
  setIsLoggedIn(loggedIn: boolean) {
    this.isLoggedIn = loggedIn;
  }
}
