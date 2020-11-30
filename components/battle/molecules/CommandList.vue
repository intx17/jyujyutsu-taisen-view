<template>
  <div class="lists">
    <ul class="nes-list is-circle command-list">
      <command v-for="(command, index) in commandList"
        :key="index"
        :command="command"
        class="command"
        @on-click-command-list-item="activateCommand(index)"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

// components
import Command from '~/components/battle/atoms/Command.vue';

// interfaces
import { ICommand } from '~/src/components/battle/atoms/command';
import { playerStore } from '~/utils/storeAccessor';

@Component({
  components: {
    Command
  }
})
export default class CommandList extends Vue {
  private activeIndex: number | null = null;

  private commandList: ICommand[] = [
    {
      name: '攻撃1',
      description: '色々と説明する色々と説明する',
      attack: 10,
      isActive: false,
      isOutdoor: true,
    },
    {
      name: '攻撃2',
      description: '色々と説明する色々と説明する',
      attack: 20,
      isActive: false,
      isOutdoor: false,
    },
    {
      name: '攻撃3',
      description: '色々と説明する色々と説明する',
      attack: 30,
      isActive: false,
      isOutdoor: false,
    },
  ];

  // method
  private activateCommand (index: number): void {
    if (index === this.activeIndex) {
      this.activeIndex = null;
      this.commandList = this.commandList.map((c) => {
        c.isActive = false;
        return c
      });
      playerStore.setActiveCommand(null);
      return;
    }

    this.activeIndex = index;
    playerStore.setActiveCommand({
      name: this.commandList[this.activeIndex].name,
      attack: this.commandList[this.activeIndex].attack
    });

    this.commandList = this.commandList.map((c, i) => {
      const isActive = i === index;
      c.isActive = isActive;
      return c;
    })
  }
}
</script>

<style scoped>
</style>
