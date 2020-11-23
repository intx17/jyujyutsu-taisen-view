
<template>
  <span class="message" v-text="message" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { AlertColor } from "@/src/enums/alertColor";

@Component({})
export default class PositivesInfo extends Vue {
  @Prop({ type: String, required: true, default: 0 })
  private prefecture!: string;
  @Prop({ type: Number, required: true, default: 0 })
  private countOfPositives!: number;

  private get message () {
    return `${this.prefecture}の新規感染者数: ${this.countOfPositives}`;
  }
}
</script>

<style scoped>
</style>
