<template>
  <div class="command">
    <li
      class="command-list-item"
      :class="{ 'is-active': syncedCommand.isActive }"
      @click="onClickCommandListItem"
    >
      <p v-if="syncedCommand.isActive" class="nes-balloon from-left nes-pointer command-ballon">
        {{ syncedCommand.description }}<br>
        ATK: {{ syncedCommand.attack }} 黒閃率: {{ syncedCommand.criticalRate }}%
      </p>
      <span>
        {{ syncedCommand.name }}
      </span>
    </li>
  </div>
</template>

<script lang="ts">
import { Component, Vue, PropSync, Emit } from 'nuxt-property-decorator'

// interfaces
import { ICommand } from '~/src/components/battle/atoms/command'

@Component({})
export default class CommandList extends Vue {
  @PropSync('command', { type: Object, required: true, default: () => {} })
  private syncedCommand!: ICommand;

  // method
  @Emit()
  private onClickCommandListItem () {}
}
</script>

<style scoped>
.command-ballon {
  position: absolute;
  top: -110px;
  left: 20px;
  font-size: 0.8rem;
}

.command-list-item {
  position: relative;
}

.command-list-item.is-active span {
  font-weight: bold;
}

.command-list-item.is-active::before {
  box-shadow: 8px 2px, 10px 2px, 6px 4px, 8px 4px, 10px 4px, 12px 4px, 4px 6px, 6px 6px, 8px 6px, 10px 6px, 12px 6px, 14px 6px, 4px 8px, 6px 8px, 8px 8px, 10px 8px, 12px 8px, 14px 8px, 6px 10px, 8px 10px, 10px 10px, 12px 10px, 8px 12px, 10px 12px;
}
</style>
