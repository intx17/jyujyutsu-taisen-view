<template>
  <div class="nes-container with-title is-rounded">
    <p class="title player-container-title">プレイヤー</p>
    <hp-bar :hp="hp" />
    <command-list />
    <attack-button />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

// components
import CommandList from '~/components/index/molecules/CommandList.vue';
import AttackButton from '~/components/index/atoms/AttackButton.vue';
import HpBar from '~/components/index/atoms/HpBar.vue';

@Component({
  components: {
    CommandList,
    AttackButton,
    HpBar
  }
})
export default class PlayerContainer extends Vue {
  private hp: number = 50;
}
</script>

<style scoped>
.player-container-title {
  font-size: 1.1rem;
  font-weight: bold;
}

/* SP用既存スタイルの打ち消し */
.nes-btn.is-error:hover {
  color: #fff;
  text-decoration: none;
  background-color: #e76e55;
}

/* SP用既存スタイルの打ち消し */
.nes-btn.is-error:hover::after {
  box-shadow: inset -4px -4px #8c2022;
}

.nes-btn.is-error:active {
  color: #fff;
  text-decoration: none;
  background-color: #ce372b;
}

.nes-btn.is-error:active::after {
  box-shadow: inset -6px -6px #8c2022;
}
</style>
