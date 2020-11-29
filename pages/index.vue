<template>
  <section class="container">
    <amplify-authenticator class="sign-in" />
    <amplify-sign-out class="sign-out" />
  </section>
</template>

<script lang="ts">
const { AmplifyEventBus } = require('aws-amplify-vue');
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({
  layout: 'index',
  middleware: ['auth']
})
export default class Index extends Vue {
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
.sign-out {
  display: flex;
  flex-direction: column;
}
.sign-out >>> .Form__formField___2DWhT {
  margin: 0 auto;
}
</style>
