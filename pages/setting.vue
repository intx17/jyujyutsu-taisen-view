<template>
  <section class="container">
    <amplify-sign-out class="sign-out" />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  layout: 'default',
})
export default class Setting extends Vue {
}
</script>

<style scoped>
.container {
  font-family: 'Nu KinakoMochi Reg';
};
.sign-out {
  display: flex;
  flex-direction: column;
}
.sign-out >>> .Form__formField___2DWhT {
  margin: 0 auto;
}
</style>
