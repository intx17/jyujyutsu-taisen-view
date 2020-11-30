<template>
  <div>
    <div v-if="isLoggedIn">
      <nuxt />
      <common-footer class="common-footer" />
    </div>
    <div v-else>
      <amplify-authenticator class="sign-in" />
    </div>
  </div>
</template>

<script lang="ts">
import { Auth, API, JS, graphqlOperation } from 'aws-amplify'
import { GetPlayerQueryVariables, CreatePlayerMutationVariables } from '~/src/API';
import { getPlayer } from '~/src/graphql/queries';
import { createPlayer } from '~/src/graphql/mutations';
import { JapaneseWoeid } from '~/src/enums/japanese-woeid';
import { GetPlayerResponse } from '~/src/graphql/domain/player';
const { AmplifyEventBus } = require('aws-amplify-vue');

// store
import { authStore } from '~/utils/storeAccessor';

// components
import CommonFooter from '~/components/common/molecules/CommonFooter.vue';

export default {
  components: {
    CommonFooter
  },
  computed: {
    isLoggedIn: () => authStore.loggedIn
  },
  async beforeCreate () {
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

    const userInfo = await Auth.currentUserInfo();
    if (!userInfo) {
      authStore.setIsLoggedIn(false);
      return;
    }
    authStore.setIsLoggedIn(true);

    const getPlayerVar: GetPlayerQueryVariables = {
      id: userInfo.id
    };

    const player = await API.graphql(graphqlOperation(getPlayer, getPlayerVar)) as GetPlayerResponse;

    if (!player.data.getPlayer) {
      const createPlayerVar: CreatePlayerMutationVariables = {
        input: {
          id: userInfo.id,
          name: userInfo.username,
          maxHP: 100,
          woeid: JapaneseWoeid.Tokyo
        }
      }
      await API.graphql(graphqlOperation(createPlayer, createPlayerVar))
    }
  }
}
</script>
<style scoped>
html {
  height: 100%;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100%;
  font-family: 'Nu KinakoMochi Reg';
}
#__nuxt {
  min-width: 100%;
}
.common-footer {
  margin-top: 20px;
  font-family: 'Nu KinakoMochi Reg';
}
.sign-in {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.sign-in >>> .Form__formSection___3tqxz {
  min-width: 80%;
}
</style>
