<template>
  <p :class="{ 'shake-image': shakeImage }" class="curse-image-container">
    <amplify-s3-image v-if="!!imgSrc" :image-path="imgSrc" class="curse-image" />
    <!-- <img v-else :src="imgSrc" class="curse-image"> -->
  </p>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { curseStore } from '~/utils/storeAccessor'

@Component({})
export default class CurseImage extends Vue {
  @Prop({ type: String, required: true, default: '' })
  private imgSrc!: string

  private get shakeImage () {
    return curseStore.shaking
  }

  private get isLocalHost (): boolean {
    return /^https?:\/\/localhost/.test(location.href)
  }
}
</script>

<style scoped>
.curse-image-container {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100px;
}

.curse-image-container.shake-image {
  animation: shakeCurseImage 3s ease infinite;
}

.curse-image {
  width: 100px;
  height: 100px;
}

.curse-image >>> .amplify-image {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border: none;
  cursor: pointer;
}

@keyframes shakeCurseImage {
  0% { transform:translateX(0) }
  5% { transform:translateX(0) }
  10% { transform:translateX(0) }
  20% { transform:translateX(-15px) }
  25% { transform:translateX(0) }
  30% { transform:translateX(-15px) }
  50% { transform:translateX(0) }
  100% { transform:translateX(0) }
}
</style>
