<template>
  <div class="nes-container is-rounded is-dark">
    <curse-image
      :imgSrc="curse.imgSrc"
      :shakeImage="curse.shakeImage"
    />
    <curse-name
      :name="curse.name"
      :isAreaExpansion="isAreaExpansion"
    />
    <hp-bar
      :hp="curse.hp"
      :hpTextColor="hpTextColor"
    />
    <battle-history
      :battleHistories="battleHistories"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, PropSync, Vue } from 'nuxt-property-decorator';

// components
import CurseImage from '~/components/battle/atoms/CurseImage.vue';
import CurseName from '~/components/battle/atoms/CurseName.vue';
import HpBar from '~/components/battle/atoms/HpBar.vue';
import BattleHistory from '~/components/battle/atoms/BattleHistory.vue';
import { ICurse } from '~/src/components/battle/organisms/curseContainer';

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

  private hp: number = 50;
  private readonly hpTextColor: string = '#fff';
  private isAreaExpansion: boolean = true;

  private battleHistories = [
      'test1fwrefawfwrgergesgsgsegresgaeagaa',
      'test2',
      'test3',
      'test4',
      'test5',
      'test6',
  ]
}
</script>

<style scoped>

</style>
