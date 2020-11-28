<template>
  <div class="lists">
    <ul class="nes-list is-circle">
      <li v-for="(command, index) in commandList"
        :key="index"
        :class="{ 'is-active': isActive(index) }"
        @click="select(index)"
      >
        {{ command }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class CommandList extends Vue {
  private commandList: string[] = [
    '攻撃1',
    '攻撃2',
    '攻撃3',
    '攻撃4',
  ];
  private activeIndex = 0;

  // computed
  private isActive (index: number): boolean {
    return index === this.activeIndex;
  }

  private select (index: number): void {
    if (this.isActive(index)) {
      return;
    }

    this.activeIndex = index;
  }
}
</script>

<style scoped>
.nes-list.is-circle li.is-active::before {
  box-shadow: 8px 2px, 10px 2px, 6px 4px, 8px 4px, 10px 4px, 12px 4px, 4px 6px, 6px 6px, 8px 6px, 10px 6px, 12px 6px, 14px 6px, 4px 8px, 6px 8px, 8px 8px, 10px 8px, 12px 8px, 14px 8px, 6px 10px, 8px 10px, 10px 10px, 12px 10px, 8px 12px, 10px 12px;
}
</style>
