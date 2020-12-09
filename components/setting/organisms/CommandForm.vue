<template>
  <div
    class="nes-container with-title is-centered command-form-container"
  >
    <p class="title">
      コマンド設定
    </p>
    <select-with-button-and-label
      v-for="(count) in [1, 2, 3]"
      :key="count"
      class="command-select"
      :selected-value.sync="syncedSelectedCommandIds[count - 1]"
      :select-id="`command${count}`"
      :default-option-text="`▼コマンド${count}選択`"
      :options="commandOptions"
      @on-click-button="openUpdateDialog(count - 1)"
    />
    <button
      class="nes-btn create-btn"
      @click="openCreateDialog"
    >
      新規
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, PropSync, Vue } from 'nuxt-property-decorator'
import { settingStore } from '~/utils/storeAccessor'

// components
import SelectWithButtonAndLabel from '~/components/setting/atoms/SelectWithButtonAndLabel.vue'
import { ICommand } from '~/src/graphql/domain/command'
import { ISelectOption } from '~/src/components/setting/atoms/selectWithLabel'
import { ModalMode } from '~/store/setting'

@Component({
  components: {
    SelectWithButtonAndLabel
  }
})
export default class CommandForm extends Vue {
  @Prop({ type: Array, required: true, default: () => ([]) })
  private commands!: ICommand[]

  @PropSync('selectedCommandIds', { type: Array, required: true, default: () => ([]) })
  private syncedSelectedCommandIds!: string[]

  // computed
  private get commandOptions (): ISelectOption[] {
    return this.commands.map((c) => {
      return {
        value: c.id,
        text: c.name
      }
    })
  }

  // methods
  private openCreateDialog () {
    settingStore.openCommandCreateDialog()
  }

  private openUpdateDialog (commandIndex: number) {
    const selected: ICommand | undefined = this.commands.find(c => c.id === this.syncedSelectedCommandIds[commandIndex])
    if (!selected) {
      window.alert('コマンドが見つかりません')
      return
    }
    settingStore.setCommandDialog({
      mode: ModalMode.Update,
      commandId: selected.id,
      isOpen: true,
      ...selected,
      criticalRate: selected.criticalRate * 100
    })
    // settingStore.openCommandUpdateDialog()
  }
}
</script>

<style scoped>
.command-form-container {
  margin: 20px 5% 0px 5%;
}
.command-select + .command-select {
  margin-top: 15px;
}
.create-btn {
  width: 100px;
  margin-top: 10px;
}
</style>
