<template>
  <p class="hp-bar">
    <span class="hp-text">
      HP:
    </span>
    <progress
      :class="colorClass"
      :value="hp"
      class="nes-progress hp-progress"
      max="100"
    />
  </p>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

// components
import CommandList from '~/components/index/molecules/CommandList.vue';
import AttackButton from '~/components/index/atoms/AttackButton.vue';

@Component({
  components: {
    CommandList,
    AttackButton,
  }
})
export default class HpBar extends Vue {
  @Prop({ type: Number, required: true, default: 100 })
  private hp!: number

  // computed
  private get colorClass() {
    return {
      'is-primary': 50 < this.hp,
      'is-success': 30 < this.hp && this.hp <= 50,
      'is-warning': 10 < this.hp && this.hp <= 30,
      'is-error': this.hp <= 10,
    }
  }
}
</script>

<style scoped>
.hp-bar {
  display: flex;
  align-items: center;;
}

.hp-text {
  margin-right: 10px;
}

.hp-progress {
  height: 1rem;
  width: 90%;
}
</style>
