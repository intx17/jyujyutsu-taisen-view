<template>
  <div class="success-btn-container">
    <button
      type="button"
      class="nes-btn is-success success-btn"
      @click="onClickButton"
    >
      {{ text }}
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'nuxt-property-decorator';

@Component({})
export default class SuccessButton extends Vue {
  @Prop({ type: String, required: true, default: '' })
  private text!: string

  // methods
  @Emit()
  private onClickButton () {

  }
}
</script>

<style scoped>
.success-btn-container {
  display: flex;
}
.success-btn {
  width: 80%;
  margin: 0 auto;
}
/* SP用既存スタイルの打ち消し */
.nes-btn.is-success:hover {
  color: #fff;
  text-decoration: none;
  background-color: #92cc41;
}

/* SP用既存スタイルの打ち消し */
.nes-btn.is-success:hover::after {
  box-shadow: inset -4px -4px #4aa52e;;
}

.nes-btn.is-success:active {
  color: #fff;
  text-decoration: none;
  background-color: #76c442;
}

.nes-btn.is-success:active::after {
  box-shadow: inset -6px -6px #4aa52e;
}
</style>
