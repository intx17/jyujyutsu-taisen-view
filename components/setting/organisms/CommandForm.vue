<template>
  <div
    class="nes-container with-title is-centered is-rounded command-form-container"
  >
    <p class="title">
      コマンド設定
    </p>
    <select-with-button-and-label
      v-for="(count) in [1, 2, 3]"
      :key="count"
      class="command-select"
      :selected-value="''"
      :select-id="`command${count}`"
      :default-option-text="`▼コマンド${count}選択`"
      :options="commandOptions"
      @on-click-button="openUpdateDialog"
    />
    <button
      @click="openCreateDialog"
    >
      新規
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { settingStore } from '~/utils/storeAccessor'

// components
import SelectWithButtonAndLabel from '~/components/setting/atoms/SelectWithButtonAndLabel.vue'
import { ICommand } from '~/src/graphql/domain/command'
import { ISelectOption } from '~/src/components/setting/atoms/selectWithLabel'

@Component({
  components: {
    SelectWithButtonAndLabel
  }
})
export default class CommandForm extends Vue {
  @Prop({ type: Array, required: true, default: () => ([]) })
  private commands!: ICommand[];

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

  private openUpdateDialog () {
    settingStore.openCommandUpdateDialog()
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
</style>
