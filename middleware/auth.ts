import { Auth } from 'aws-amplify'
import { Context } from '@nuxt/types'
import { JapaneseWoeid } from '~/src/enums/japanese-woeid'

// store
import { authStore, playerStore } from '~/utils/storeAccessor'
const { AmplifyEventBus } = require('aws-amplify-vue')

export default async (context: Context) => {
  // ログイン, ログアウト時
  AmplifyEventBus.$on('authState', (info: any) => {
    switch (info) {
      case 'signedIn':
        authStore.setIsLoggedIn(true)
        break
      default:
        authStore.setIsLoggedIn(false)
        break
    }
  })

  // ログイン認証情報取得
  const userInfo = await Auth.currentUserInfo()
  if (!userInfo) {
    authStore.setIsLoggedIn(false)
    return
  }
  authStore.setIsLoggedIn(true)

  // ストア内プレイヤー情報取得
  if (playerStore.player !== null) {
    return
  }

  const fetchPlayerResult = await context.app.$fetchPlayer({ id: userInfo.id })
  const player = fetchPlayerResult.player

  if (player) {
    playerStore.setPlayer({
      id: player.id,
      hp: 100,
      prefecture: player.prefecture
    })
  } else {
    await context.app.$createPlayer({
      id: userInfo.id,
      name: userInfo.username,
      maxHP: 100,
      woeid: JapaneseWoeid.Japan,
      prefecture: '東京都'
    })

    // リファクタ
    playerStore.setPlayer({
      id: userInfo.id,
      hp: 100,
      prefecture: '東京都'
    })
  }
}
