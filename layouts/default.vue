<template>
  <div>
    <div v-if="isLoggedIn" class="page-content">
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
import { playerStore } from '~/utils/storeAccessor';
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
    isLoggedIn: () => authStore.isLoggedIn
  },
}
</script>
<style>
html {
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
  min-width: 100vw;
  min-height: 100vh;
  font-family: 'Nu KinakoMochi Reg';
}
div.page-content {
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  min-height: 100vh;

}
.common-footer {
  margin-top: auto;
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
