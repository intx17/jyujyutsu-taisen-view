<template>
  <div class="nes-container is-rounded is-dark">
    <curse-image
      :img-src="imgSrc"
    />
    <curse-name
      :name="name"
      :is-area-expansion="isAreaExpansion"
    />
    <hp-bar
      :hp="hp"
      :max-hp="maxHP"
      :hp-text-color="hpTextColor"
    />
    <battle-history
      :battle-histories="battleHistories"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

// components
import CurseImage from '~/components/battle/atoms/CurseImage.vue'
import CurseName from '~/components/battle/atoms/CurseName.vue'
import HpBar from '~/components/battle/atoms/HpBar.vue'
import BattleHistory from '~/components/battle/atoms/BattleHistory.vue'
import { battleStore, curseStore } from '~/store'

@Component({
  components: {
    CurseImage,
    CurseName,
    HpBar,
    BattleHistory
  }
})
export default class CurseContainer extends Vue {
  private readonly hpTextColor: string = '#fff';
  private isAreaExpansion: boolean = true;

  private get battleHistories (): string[] {
    return battleStore.battleInProgressHistory
  }

  private get name (): string {
    return curseStore.curse?.name ?? ''
  }

  private get imgSrc (): string {
    return curseStore.curse?.imgSrc ?? ''
  }

  private get hp (): number {
    return battleStore.battleInProgress?.curseHP ?? 0
  }

  private get maxHP (): number {
    return curseStore.curse?.maxHP ?? 0
  }
}
</script>

<style scoped>

</style>
