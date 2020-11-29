<template>
  <section class="container">
    <div v-if="isLoggedIn">
    </div>
    <div v-else>
      <amplify-authenticator class="sign-in" />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { Auth } from 'aws-amplify'

@Component({
  layout: 'index',
  middleware: ['auth']
})
export default class Index extends Vue {
  private isLoggedIn: boolean = false;
  async created () {
    const userInfo = await Auth.currentUserInfo();
    this.isLoggedIn = !!userInfo;
  }
}
</script>

<style scoped>
.sign-in {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.sign-in >>> .Form__formSection___3tqxz {
  min-width: 80%;
}
</style>
