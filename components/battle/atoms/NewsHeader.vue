<template>
  <header class="news-header">
    <p class="news-header-scroll">
      <span class="news-header-text">
        {{ text }}
      </span>
    </p>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({})
export default class NewsHeader extends Vue {
  @Prop({ type: String, required: true, default: '' })
  private text!: string
}
</script>

<style scoped>
.news-header {
  width: 100%;
  height: 2rem;
  background: #212529;
  overflow: hidden;
  text-align: center;
}
.news-header-scroll {
  margin: 0;
  display: inline-block;
  padding-left: 100%;
  white-space: nowrap;
  line-height: 1em;
  animation: scrollNewsHeaderText 10s linear infinite;
}
.news-header-text {
  line-height: 2rem;
  color: #fff;
}

@keyframes scrollNewsHeaderText {
  0% { transform: translateX(0)}
  100% { transform: translateX(-100%)}
}
</style>
