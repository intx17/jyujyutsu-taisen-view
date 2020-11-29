<template>
  <div>
    <header class="header">
      <span class="header-text">JyuJyuTsu Taisen</span>
    </header>
    <nuxt />
  </div>
</template>

<script lang="ts">
</script>
<style scoped>
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
  justify-content: space-between;
  align-items: center;
  min-height: 100%;
}
.header {
  height: 3rem;
  background: #212529;
  text-align: center;
  line-height: 3rem;
}
.header-text {
  font-family: 'Nu KinakoMochi Reg';
  font-weight: bold;
  color: #fff;
}
</style>
