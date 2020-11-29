<template>
  <div class="lists">
    <ul class="nes-list is-circle battle-history-list">
      <li v-for="(history, index) in battleHistories"
        :key="index"
      >
        {{ history }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component({})
export default class BattleHistory extends Vue {
  @Prop({ type: Array, required: false, default: () => [] })
  private battleHistories!: string[];
}
</script>

<style scoped>
.battle-history-list {
  margin-bottom: 0px;
}
</style>
