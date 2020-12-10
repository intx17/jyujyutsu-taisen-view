<template>
  <section class="container">
    <setting-header />
    <prefecture-form
      :prefecture-value.sync="prefectureValue"
    />
    <command-form
      :selected-command-ids.sync="selectedCommandIds"
    />
    <command-dialog />
    <success-button
      class="save-btn"
      :text="'保存'"
      @on-click-button="save"
    />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { playerStore } from '~/utils/storeAccessor'
import { prefectureOptions } from '~/src/components/setting/molecules/prefectureForm'

// components
import SettingHeader from '~/components/setting/molecules/SettingHeader.vue'
import PrefectureForm from '~/components/setting/molecules/PrefectureForm.vue'
import CommandForm from '~/components/setting/organisms/CommandForm.vue'
import SuccessButton from '~/components/setting/atoms/SuccessButton.vue'
import CommandDialog from '~/components/setting/organisms/CommandDialog.vue'
import { ICommand } from '~/src/graphql/domain/command'
import { IPlayer } from '~/src/graphql/domain/player'

@Component({
  layout: 'default',
  middleware: ['auth'],
  components: {
    SettingHeader,
    PrefectureForm,
    CommandForm,
    SuccessButton,
    CommandDialog
  },
  asyncData () {
    if (playerStore.player === null) {
      window.alert('ユーザーデータが存在しません')
      return
    }

    const selectedCommands = playerStore.selectedCommands
    const selectedCommandIds: string[] = ['', '', '']

    let selectedCount = 0
    for (const [i, c] of selectedCommands.entries()) {
      if (selectedCount >= 3) {
        break
      }
      selectedCommandIds[i] = c.id
      selectedCount += 1
    }

    const prefectureValue = prefectureOptions.find(o => o.text === playerStore.player?.prefecture)?.value || ''

    return {
      selectedCommandIds,
      prefectureValue
    }
  }
})
export default class Setting extends Vue {
  private selectedCommandIds!: string[]
  private prefectureValue!: string;

  // methods
  private async save () {
    const playerInStore = playerStore.player

    // ふつ〜起こり得ない
    if (playerInStore === null) {
      window.alert('ユーザーが存在しません')
      return
    }

    const prefecture: string = prefectureOptions
      .find(o => o.value === this.prefectureValue)?.text ?? '東京都'

    // update DB
    await this.$updatePlayer({
      id: playerInStore.id,
      prefecture
    })

    await this.$updateSelectedCommand({
      ids: this.selectedCommandIds
    })

    // update store
    const copiedPlayer: IPlayer = JSON.parse(JSON.stringify(playerInStore))
    copiedPlayer.prefecture = prefecture
    const items = copiedPlayer.commands.items
    const selectedCommands = playerStore.player?.commands.items.filter(c => this.selectedCommandIds.includes(c.id)) ?? []
    const newItems: ICommand[] = []
    // TODO: リファクタ
    for (const item of items) {
      if (this.selectedCommandIds.includes(item.id)) {
        const newItem = selectedCommands.find(sc => sc.id === item.id)!
        newItems.push(newItem)
        continue
      }
      newItems.push(item)
    }

    copiedPlayer.commands.items = newItems
    playerStore.setPlayer(copiedPlayer)
    playerStore.setSelectedCommands(selectedCommands)
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  font-family: 'Nu KinakoMochi Reg';
}
.save-btn {
  margin: 15px 5% 0px 5%;
}
</style>
