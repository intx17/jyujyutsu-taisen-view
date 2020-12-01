<template>
  <header class="setting-header">
    <p class="setting-header-text-container">
      <span class="setting-header-text">
        設定
      </span>
    </p>
    <div class="log-out-btn-container">
      <log-out-button />
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { Auth } from 'aws-amplify';
import { authStore } from '~/utils/storeAccessor';

// components
import LogOutButton from '~/components/common/atoms/LogOutButton.vue';

@Component({
  components: {
    LogOutButton,
  }
})
export default class SettingHeader extends Vue {
  // methods
  private async signOut () {
    await Auth.signOut()
      .catch((error) => console.log(error));

    authStore.setIsLoggedIn(false);
  }
}
</script>

<style scoped>
.setting-header {
  width: 100%;
  height: 2rem;
  display: flex;
  flex-direction: row;
  background: #212529;
  overflow: hidden;
  text-align: center;
}
.setting-header-text-container {
  width: 80%;
}
.setting-header-text {
  line-height: 2rem;
  color: #fff;
}
.log-out-btn-container {
  width: 20%;
  height: 2rem;
}
</style>
