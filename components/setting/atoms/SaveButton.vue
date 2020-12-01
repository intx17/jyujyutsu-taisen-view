<template>
  <div class="success-btn-container">
    <button type="button" class="nes-btn is-success success-btn">保存</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({})
export default class SaveButton extends Vue {
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
