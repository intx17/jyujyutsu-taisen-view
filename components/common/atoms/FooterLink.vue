<template>
  <nuxt-link :to="url" class="nes-badge link">
    <span :class="spanClass">
      {{ text }}
    </span>
  </nuxt-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class FooterLink extends Vue {
  @Prop({ type: String, required: true, default: 'is-dark' })
  private spanClass?: string;

  @Prop({ type: String, required: true, default: 'title' })
  private text!: string;

   @Prop({ type: String, required: true, default: '#' })
  private url!: string;
}
</script>

<style scoped>
.link {
  width: 45%;
}
</style>
