<template>
  <p class="curse-image-container">
    <img :src="imgSrc" class="curse-image"/>
  </p>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({})
export default class CurseImage extends Vue {
  @Prop({ type: String, required: true, default: '' })
  private imgSrc!: string
}
</script>

<style scoped>
.curse-image {
  width: 110px;
  height: 110px;
}
</style>
