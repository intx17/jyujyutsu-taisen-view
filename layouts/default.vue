<template>
  <div>
    <nuxt />
    <common-footer class="common-footer" />
  </div>
</template>

<script lang="ts">
import CommonFooter from '~/components/common/molecules/CommonFooter.vue';

export default {
  components: {
    CommonFooter
  }
}
</script>
<style>
html {
  height: 100%;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100%;
  font-family: 'Nu KinakoMochi Reg';
}
#__nuxt {
  min-width: 100%;
}
.common-footer {
  margin-top: 15px;
}
</style>
