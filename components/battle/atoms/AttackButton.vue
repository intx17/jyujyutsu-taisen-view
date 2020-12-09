<template>
  <button
    type="button"
    :class="{ 'is-disabled': !enabled, 'is-error': enabled }"
    class="nes-btn attack-btn"
    @click="emitClickByEnabled"
  >
    攻撃する
  </button>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class AttackButton extends Vue {
  @Prop({ type: Boolean, required: false, default: false })
  private enabled?: boolean

  // methods
  private emitClickByEnabled () {
    if (this.enabled) {
      this.onClickAttackButton()
    }
  }

  @Emit()
  onClickAttackButton () {
  }
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
