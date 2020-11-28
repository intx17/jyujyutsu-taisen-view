<template>
  <div class="nes-container is-rounded is-dark">
    <p class="title">コマンド選択</p>
    <command-list />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

// components
import CommandList from '~/components/index/atoms/CommandList.vue';

@Component({
  components: {
    CommandList
  }
})
export default class CommandContainer extends Vue {
}
</script>

<style scoped>
.nes-list.is-circle li.is-active::before {
  box-shadow: 8px 2px, 10px 2px, 6px 4px, 8px 4px, 10px 4px, 12px 4px, 4px 6px, 6px 6px, 8px 6px, 10px 6px, 12px 6px, 14px 6px, 4px 8px, 6px 8px, 8px 8px, 10px 8px, 12px 8px, 14px 8px, 6px 10px, 8px 10px, 10px 10px, 12px 10px, 8px 12px, 10px 12px;
}
</style>
