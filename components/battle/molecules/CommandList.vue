<template>
  <div class="lists">
    <ul class="nes-list is-circle command-list">
      <command
        v-for="(command, index) in commandList"
        :key="index"
        :command="command"
        class="command"
        @on-click-command-list-item="activateCommand(index)"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

// components
import Command from '~/components/battle/atoms/Command.vue'

// interfaces
import { ICommand } from '~/src/components/battle/atoms/command'
import { ICommand as IDomainCommand } from '~/src/graphql/domain/command'
import { playerStore } from '~/utils/storeAccessor'

@Component({
  components: {
    Command
  }
})
export default class CommandList extends Vue {
  private activeIndex: number | null = null
  private commandList: ICommand[] = []

  // computed
  private get storeCommandList (): IDomainCommand[] {
    return playerStore.selectedCommands
  }

  private created () {
    this.commandList = this.storeCommandList.map((storeCommand) => {
      const command: ICommand = {
        name: storeCommand.name,
        description: storeCommand.description,
        attack: storeCommand.attack,
        criticalRate: storeCommand.criticalRate * 100,
        isActive: false,
        isOutdoor: storeCommand.isOutdoor
      }

      return command
    })
  }

  // method
  private activateCommand (index: number): void {
    if (index === this.activeIndex) {
      this.activeIndex = null
      this.commandList = this.commandList.map((c) => {
        c.isActive = false
        return c
      })
      playerStore.setActiveCommand(null)
      return
    }

    this.activeIndex = index
    playerStore.setActiveCommand(this.storeCommandList[index])

    this.commandList = this.commandList.map((c, i) => {
      const isActive = i === index
      c.isActive = isActive
      return c
    })
  }
}
</script>

<style scoped>
</style>
