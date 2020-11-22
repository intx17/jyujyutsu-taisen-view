
<template>
  <span class="message" v-text="message" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { AlertColor } from "@/src/enums/alertColor";

@Component({})
export default class Clock extends Vue {
  @Prop({ type: Number, required: true, default: 0 })
  private numberOfInfected!: number;

  private get message () {
    return `temp${this.numberOfInfected}`
  }
}
</script>

<style scoped>
</style>
