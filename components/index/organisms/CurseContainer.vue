<template>
  <div class="nes-container is-rounded is-dark">
    <curse-image
      :imgSrc="curse.imgSrc"
    />
    <p class="curse-name">
      {{ curse.name }}
    </p>
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
import HpBar from '~/components/index/atoms/HpBar.vue';
import BattleHistory from '~/components/index/atoms/BattleHistory.vue';
import { ICurse } from '~/src/components/index/organisms/curseContainer';

@Component({
  components: {
    CurseImage,
    HpBar,
    BattleHistory
  }
})
export default class CurseContainer extends Vue {
  private hp: number = 50;
  private readonly hpTextColor: string = '#fff';

  private curse: ICurse = {
    name: 'ベルゼブブ',
    hp: 50,
    imgSrc: '/img/beelzebub.png'
  }

  private battleHistories = [
      'test1',
      'test2',
      'test3',
  ]
}
</script>

<style scoped>
.curse-image-container {
  display: flex;
  justify-content: center;
}

.curse-name {
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 1.1rem;
}
</style>
