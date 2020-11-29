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
import Command from '~/components/index/atoms/Command.vue';

// interfaces
import { ICommand } from '~/src/components/index/atoms/command';

@Component({
  components: {
    Command
  }
})
export default class CommandList extends Vue {
  private activeIndex = 0;

  private commandList: ICommand[] = [
    {
      name: '攻撃1',
      description: '色々と説明する',
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
    {
      name: '攻撃4',
      description: '色々と説明する色々と説明する色々と説明する色々と説明する',
      attack: 40,
      isActive: false,
      isOutdoor: false,
    },
  ];

  // method
  private created () {
    this.commandList[0].isActive = true;
  }

  private activateCommand (index: number): void {
    if (index === this.activeIndex) {
      return;
    }
    this.activeIndex = index;

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
