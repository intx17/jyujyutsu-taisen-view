<template>
  <p :class="curseNameContainerClasses"
    class="curse-name-container nes-text"
  >
    <span class="curse-name">
      {{ name }}
    </span>
    <span v-if="isAreaExpansion" class="is-area-exepansion-text">
      (領域展開)
    </span>
  </p>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({})
export default class CurseName extends Vue {
  @Prop({ type: String, required: true, default: '' })
  private name!: string

  @Prop({ type: Boolean, required: true, default: false })
  private isAreaExpansion!: boolean

  // computed
  private get curseNameContainerClasses() {
    return {
      'is-warning': this.isAreaExpansion
    }
  }
}
</script>

<style scoped>
.curse-name-container {
  display: flex;
  justify-content: center;
}
.curse-name {
  font-size: 1.1rem;
  font-weight: bold;
}
.is-area-exepansion-text {
  font-weight: bold;
}
</style>
