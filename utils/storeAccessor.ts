/* eslint-disable no-unused-vars */
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import AuthStore from '~/store/auth'
import CurseStore from '~/store/curse'
import PlayerStore from '~/store/player'
import SettingStore from '~/store/setting'

// eslint-disable-next-line import/no-mutable-exports
let authStore: AuthStore
// eslint-disable-next-line import/no-mutable-exports
let curseStore: CurseStore
// eslint-disable-next-line import/no-mutable-exports
let playerStore: PlayerStore
// eslint-disable-next-line import/no-mutable-exports
let settingStore: SettingStore

function initialiseStores (store: Store<any>): void {
  authStore = getModule(AuthStore, store)
  curseStore = getModule(CurseStore, store)
  playerStore = getModule(PlayerStore, store)
  settingStore = getModule(SettingStore, store)
}

export { initialiseStores, authStore, curseStore, playerStore, settingStore }
