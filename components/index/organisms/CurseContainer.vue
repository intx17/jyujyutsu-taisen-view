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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

// components
import CurseImage from '~/components/index/atoms/CurseImage.vue';
import HpBar from '~/components/index/atoms/HpBar.vue';
import { ICurse } from '~/src/components/index/organisms/curseContainer';

@Component({
  components: {
    CurseImage,
    HpBar
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
}
</style>
