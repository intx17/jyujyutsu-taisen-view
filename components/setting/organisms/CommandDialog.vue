<template>
  <dialog v-if="isOpen" id="command-dialog" class="nes-dialog is-rounded" open>
    <div class="icon-container" @click="closeDialog">
      <i class="nes-icon close" />
    </div>
    <form method="dialog">
      <div class="nes-field">
        <label for="name">名前</label>
        <input id="name" v-model="name" type="text" class="nes-input">
      </div>
      <div>
        <label for="description">説明</label>
        <textarea id="description" v-model="description" class="nes-textarea" />
      </div>
      <div class="nes-field">
        <label for="attack">攻撃力</label>
        <input
          id="attack"
          v-model="attack"
          type="number"
          class="nes-input"
          min="1"
          max="100"
        >
      </div>
      <div class="nes-field">
        <label for="critical">クリティカル率</label>
        <input
          id="critical"
          v-model="criticalRate"
          type="number"
          class="nes-input"
          min="1"
          max="100"
        >
      </div>
      <div class="checkbox-container">
        <label>
          <input v-model="isOutdoor" type="checkbox" class="nes-checkbox">
          <span>野外活動</span>
        </label>
      </div>
      <success-button
        class="finish-btn"
        :text="'完了'"
        @on-click-button="finish"
      />
    </form>
  </dialog>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'
import { settingStore, playerStore } from '~/utils/storeAccessor'
import { ModalMode } from '~/store/setting'

// component
import SuccessButton from '~/components/setting/atoms/SuccessButton.vue'

@Component({
  components: {
    SuccessButton
  }
})
export default class CommonDialog extends Vue {
  private name: string = '';
  private description: string = '';
  private attack: string = '10';
  private criticalRate: string = '50';
  private isOutdoor: boolean = false;

  // computed
  private get isOpen () {
    return settingStore.commandDialog.isOpen
  }

  // methods
  @Watch('isOpen')
  private onOpen () {
    if (settingStore.commandDialog.mode === ModalMode.Create) {
      this.name = ''
      this.description = ''
      this.attack = '0'
      this.criticalRate = '0'
      this.isOutdoor = false
      return
    }
    this.loadStore()
  }

  private loadStore () {
    const dialog = settingStore.commandDialog

    this.name = dialog.name
    this.description = dialog.description
    this.attack = String(dialog.attack)
    this.criticalRate = String(dialog.criticalRate)
    this.isOutdoor = dialog.isOutdoor
  }

  private closeDialog () {
    settingStore.closeCommandDialog()
  }

  private isValidInputs () {
    const attack = Number(this.attack)
    const criticalRate = Number(this.criticalRate)

    return !!this.name &&
      !!this.description &&
      (Number.isInteger(attack) && attack > 0) &&
      (Number.isInteger(criticalRate) && criticalRate > 0)
  }

  private async finish () {
    if (!playerStore.player) {
      window.alert('ユーザーデータが存在しません。')
      return
    }

    if (!this.isValidInputs) {
      window.alert('invalid input was found.')
      return
    }

    if (settingStore.commandDialog.mode === ModalMode.Create) {
      await this.$createCommand({
        name: this.name,
        description: this.description,
        attack: Number(this.attack),
        criticalRate: Number(this.criticalRate) / 100,
        isOutdoor: this.isOutdoor,
        inSelectedCommandList: false,
        playerID: playerStore.player.id
      })
    } else {
      await this.$updateCommand({
        id: settingStore.commandDialog.commandId!,
        name: this.name,
        description: this.description,
        attack: Number(this.attack),
        criticalRate: Number(this.criticalRate) / 100,
        isOutdoor: this.isOutdoor,
        inSelectedCommandList: false
      })
    }

    settingStore.closeCommandDialog()
  }
}
</script>

<style scoped>
.nes-dialog {
  z-index: 100;
  margin: 20px 5% 0px 5%;
}
.icon-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.checkbox-container {
  margin-top: 15px;
}
.finish-btn {
  margin-top: 15px;
}
</style>
