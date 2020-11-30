<template>
  <button
    type="button"
    class="nes-btn is-error log-out-btn"
    @click="signOut"
  >
    LOG OUT
  </button>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { Auth } from 'aws-amplify';
import { authStore } from '~/utils/storeAccessor';

@Component({})
export default class LogOutButton extends Vue {
  // methods
  private async signOut () {
    await Auth.signOut()
      .catch((error) => console.log(error));

    authStore.setIsLoggedIn(false);
  }
}
</script>

<style scoped>
.log-out-btn-container {
  width: 20%;
  height: 2rem;
}
.log-out-btn {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-size: 0.8rem;
}
.log-out:active {
  color: #fff;
  text-decoration: none;
  background-color: #ce372b;
}

.log-out-btn:active::after {
  box-shadow: inset -6px -6px #8c2022;
}
</style>
