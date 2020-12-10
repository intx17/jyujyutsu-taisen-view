<template>
  <dialog v-if="isOpen" id="command-dialog" class="nes-dialog is-rounded" open>
    <div class="icon-container" @click="closeDialog">
      <i class="nes-icon close" />
    </div>
    <div class="trends-container">
      {{ trends }}
    </div>
  </dialog>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { battleStore } from '~/utils/storeAccessor'

// component

@Component({
})
export default class TrendsDialog extends Vue {
  // computed
  private get isOpen () {
    return battleStore.isTrendsDialogOpen
  }

  private get trends (): string {
    const trends = battleStore.battleInProgress?.trends

    if (trends) {
      return trends.replace(/"/g, '')
    }

    return 'トレンドがありません'
  }

  // methods

  private closeDialog () {
    battleStore.setIsTrendsDialogOpen(false)
  }
}
</script>

<style scoped>
.nes-dialog {
  z-index: 100;
  width: 90%;
  height: 80%;
  margin-top: 30px;
}
.trends-container {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
.icon-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
</style>
