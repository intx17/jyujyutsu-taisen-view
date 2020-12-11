import { Auth } from 'aws-amplify'
import { Context } from '@nuxt/types'
import { JapaneseWoeid } from '~/src/enums/japanese-woeid'

// store
import { authStore, battleStore, curseStore, playerStore } from '~/utils/storeAccessor'
const { AmplifyEventBus } = require('aws-amplify-vue')

export default async (context: Context) => {
  const userInfo = await Auth.currentUserInfo()

  // ログイン, ログアウト時
  AmplifyEventBus.$on('authState', (info: any) => {
    switch (info) {
      case 'signedIn':
        authStore.setIsLoggedIn(true)
        if (!userInfo) {
          location.href = ('/battle')
        }
        break
      default:
        authStore.setIsLoggedIn(false)
        break
    }
  })

  // ログイン認証情報取得
  if (!userInfo) {
    authStore.setIsLoggedIn(false)
    return
  }
  authStore.setIsLoggedIn(true)

  // ストア内プレイヤー情報取得
  if (playerStore.player !== null && playerStore.player.id === userInfo.id) {
    return
  }

  const fetchPlayerResult = await context.app.$fetchPlayer({ id: userInfo.id })
  const player = fetchPlayerResult.player

  if (player) {
    playerStore.setPlayer(player)
    const battleInProgress = player.battles.items.find(b => b.inProgress) ?? null
    battleStore.setBattleInProgress(battleInProgress)
    const playerSelectedCommands = player.commands.items.filter(c => c.inSelectedCommandList)
    playerStore.setSelectedCommands(playerSelectedCommands)

    if (battleInProgress) {
      const fetchCurseResult = await context.app.$fetchCurse({
        id: battleInProgress.curseID
      })
      const curse = fetchCurseResult.curse
      curseStore.setCurse(curse)
    }
  } else {
    const player = {
      id: userInfo.id,
      name: userInfo.username,
      maxHP: 100,
      woeid: JapaneseWoeid.Japan,
      prefecture: '東京都'
    }
    await context.app.$createPlayer(player)

    // リファクタ
    playerStore.setPlayer({
      id: userInfo.id,
      name: userInfo.user,
      maxHP: 100,
      prefecture: '東京都',
      woeid: JapaneseWoeid.Japan,
      commands: {
        items: []
      },
      battles: {
        items: []
      }
    })

    // TODO: 新規参入者の最初の敵を作る
  }
}
