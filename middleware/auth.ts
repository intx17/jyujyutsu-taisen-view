import { Auth, API,  graphqlOperation } from 'aws-amplify'
import { GetPlayerQueryVariables, CreatePlayerMutationVariables } from '~/src/API';
import { getPlayer } from '~/src/graphql/queries';
import { createPlayer } from '~/src/graphql/mutations';
import { JapaneseWoeid } from '~/src/enums/japanese-woeid';
import { GetPlayerResponse } from '~/src/graphql/domain/player';
const { AmplifyEventBus } = require('aws-amplify-vue');

// store
import { authStore, playerStore } from '~/utils/storeAccessor';
import { Context } from '@nuxt/types';

export default async (context: Context) => {
    // ログイン, ログアウト時
  AmplifyEventBus.$on('authState', (info: any) => {
    switch (info) {
      case 'signedIn':
        authStore.setIsLoggedIn(true);
        break
      default:
        authStore.setIsLoggedIn(false);
        break;
    }
  });

  // ログイン認証情報取得
  const userInfo = await Auth.currentUserInfo();
  if (!userInfo) {
    authStore.setIsLoggedIn(false);
    return;
  }
  authStore.setIsLoggedIn(true);

  // ストア内プレイヤー情報取得
  if (playerStore.player !== null) {
    return;
  }

  const getPlayerVar: GetPlayerQueryVariables = {
    id: userInfo.id
  };

  const fetchPlayerResult = await context.app.$fetchPlayer({ id: userInfo.id });
  const player = fetchPlayerResult.player;

  if (player) {
    playerStore.setPlayer({
      id: player.id,
      hp: 100,
      prefecture: player.prefecture,
    });
  } else {
    await context.app.$createPlayer({
        id: userInfo.id,
        name: userInfo.username,
        maxHP: 100,
        woeid: JapaneseWoeid.Tokyo,
        prefecture: '東京都',
      });

    // リファクタ
    playerStore.setPlayer({
      id: userInfo.id,
      hp: 100,
      prefecture: '東京都'
    });
  }
}
