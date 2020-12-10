<template>
  <div class="hp-bar">
    <span
      :style="hpTextStyles"
      class="hp-text"
    >
      HP:
    </span>
    <progress
      :class="progressBarColorClass"
      :value="hp"
      class="nes-progress hp-progress"
      :max="maxHp"
    />
    <span class="hp-num">
      {{ hp }}/{{ maxHp }}
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

// components
import CommandList from '~/components/battle/molecules/CommandList.vue'
import AttackButton from '~/components/battle/atoms/AttackButton.vue'

@Component({
  components: {
    CommandList,
    AttackButton
  }
})
export default class HpBar extends Vue {
  @Prop({ type: Number, required: true, default: 100 })
  private hp!: number

  @Prop({ type: Number, required: true, default: 100 })
  private maxHp!: number

  @Prop({ type: String, required: false, default: '#212529' })
  private hpTextColor?: string

  // computed
  private get hpTextStyles () {
    return {
      color: this.hpTextColor
    }
  }

  private get progressBarColorClass () {
    const half = this.hp / 2
    const third = this.hp / 3
    const ten = this.hp / 10
    return {
      'is-primary': this.hp > half,
      'is-success': this.hp > third && this.hp <= half,
      'is-warning': this.hp > ten && this.hp <= third,
      'is-error': this.hp <= ten
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
  margin-right: 5px;
  font-size: 0.8rem;
}

.hp-progress {
  height: 1rem;
  width: 70%;
  margin-right: 5px;
}

.hp-num {
  font-size: 0.7rem;
}
</style>
