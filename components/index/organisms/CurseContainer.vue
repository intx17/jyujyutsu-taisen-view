<template>
  <div class="nes-container is-rounded is-dark">
    <curse-image
      :imgSrc="curse.imgSrc"
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
import { Component, Vue } from 'nuxt-property-decorator';

// components
import CurseImage from '~/components/index/atoms/CurseImage.vue';
import CurseName from '~/components/index/atoms/CurseName.vue';
import HpBar from '~/components/index/atoms/HpBar.vue';
import BattleHistory from '~/components/index/atoms/BattleHistory.vue';
import { ICurse } from '~/src/components/index/organisms/curseContainer';

@Component({
  components: {
    CurseImage,
    CurseName,
    HpBar,
    BattleHistory
  }
})
export default class CurseContainer extends Vue {
  private hp: number = 50;
  private readonly hpTextColor: string = '#fff';
  private isAreaExpansion: boolean = true;

  private curse: ICurse = {
    name: 'ベルゼブブ',
    hp: 50,
    imgSrc: '/img/beelzebub.png'
  }

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
