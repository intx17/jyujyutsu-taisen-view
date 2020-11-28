<template>
  <a href="#" class="nes-badge">
    <span :class="spanClass">
      {{ text }}
    </span>
  </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({})
export default class FooterLink extends Vue {
  @Prop({ type: String, required: true, default: 'is-dark' })
  private spanClass!: string;

  @Prop({ type: String, required: true, default: 'title' })
  private text!: string;
}
</script>
