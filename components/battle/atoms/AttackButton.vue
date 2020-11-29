<template>
  <button type="button" class="nes-btn is-error attack-btn">
    攻撃する
  </button>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class AttackButton extends Vue {
}
</script>

<style scoped>
.attack-btn {
  width: 98%;
  height: auto;
  padding: 2px 4px;
  font-weight: bold;
}
</style>
