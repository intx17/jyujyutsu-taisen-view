<template>
  <div class="nes-container is-rounded is-dark">
    <curse-image
      :img-src="curse.imgSrc"
    />
    <curse-name
      :name="curse.name"
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
import { Component, Prop, Vue } from 'nuxt-property-decorator'

// components
import CurseImage from '~/components/battle/atoms/CurseImage.vue'
import CurseName from '~/components/battle/atoms/CurseName.vue'
import HpBar from '~/components/battle/atoms/HpBar.vue'
import BattleHistory from '~/components/battle/atoms/BattleHistory.vue'
import { ICurse } from '~/src/components/battle/organisms/curseContainer'
import { curseStore } from '~/store'

@Component({
  components: {
    CurseImage,
    CurseName,
    HpBar,
    BattleHistory
  }
})
export default class CurseContainer extends Vue {
  @Prop({ type: Object, required: true, default: () => {} })
  private curse!: ICurse

  private readonly hpTextColor: string = '#fff';
  private isAreaExpansion: boolean = true;

  private battleHistories = [
    'test1fwrefawfwrgergesgsgsegresgaeagaa',
    'test2',
    'test3',
    'test4',
    'test5',
    'test6'
  ]

  private get hp (): number {
    return curseStore.curse.hp
  }

  private get maxHP (): number {
    return curseStore.curse.maxHP
  }
}
</script>

<style scoped>

</style>
