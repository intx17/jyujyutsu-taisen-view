<template>
  <div id="battle-history-container">
    <ul class="nes-list is-circle battle-history-list">
      <li
        v-for="(history, index) in battleHistories"
        :key="index"
      >
        <span class="history">
          {{ history }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({})
export default class BattleHistory extends Vue {
  @Prop({ type: Array, required: false, default: () => [] })
  private battleHistories!: string[];

  // methods
  private mounted () {
    this.scrollToBottom()
  }

  private scrollToBottom () {
    const target = document.getElementById('battle-history-container')!
    target.scrollTop = target.scrollHeight
  }
}
</script>

<style scoped>
#battle-history-container {
  height: 72px;
  overflow-y: scroll;
}
.battle-history-list {
  margin-bottom: 0px;
  word-break: break-all;
}
.battle-history-list li::before {
  box-shadow: 8px 2px #fff, 10px 2px #fff, 6px 4px #fff, 8px 4px #fff, 10px 4px #fff, 12px 4px #fff, 4px 6px #fff, 6px 6px #fff, 12px 6px #fff, 14px 6px #fff, 4px 8px #fff, 6px 8px #fff, 12px 8px #fff, 14px 8px #fff, 6px 10px #fff, 8px 10px #fff, 10px 10px #fff, 12px 10px #fff, 8px 12px #fff, 10px 12px #fff;
}
.history {
  font-size: 0.8rem;
};
</style>
