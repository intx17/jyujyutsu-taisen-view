<template>
  <section class="container">
    <setting-header />
    <prefecture-form
      :prefecture-value.sync="prefectureValue"
    />
    <command-form
      :commands="commands"
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
import { Context } from '@nuxt/types'
import { playerStore } from '~/utils/storeAccessor'
import { prefectureOptions } from '~/src/components/setting/molecules/prefectureForm'

// components
import SettingHeader from '~/components/setting/molecules/SettingHeader.vue'
import PrefectureForm from '~/components/setting/molecules/PrefectureForm.vue'
import CommandForm from '~/components/setting/organisms/CommandForm.vue'
import SuccessButton from '~/components/setting/atoms/SuccessButton.vue'
import CommandDialog from '~/components/setting/organisms/CommandDialog.vue'
import { ICommand } from '~/src/graphql/domain/command'

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
  async asyncData (context: Context) {
    if (playerStore.player === null) {
      window.alert('ユーザーデータが存在しません')
      return
    }

    const listPlayerCommandsResult = await context.app.$listPlayerCommands({
      playerID: playerStore.player.id
    })

    const commands = listPlayerCommandsResult.commands
    const selectedCommandIds: string[] = ['', '', '']

    let selectedCount = 0
    for (const [i, c] of commands.entries()) {
      if (selectedCount >= 3) {
        break
      }
      if (c.inSelectedCommandList) {
        selectedCommandIds[i] = c.id
        selectedCount += 1
      }
    }

    const prefectureValue = prefectureOptions.find(o => o.text === playerStore.player?.prefecture)?.value || ''

    return {
      commands,
      selectedCommandIds,
      prefectureValue
    }
  }
})
export default class Setting extends Vue {
  private commands!: ICommand[]
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
    playerStore.setPlayer({
      id: playerInStore.id,
      hp: playerInStore.hp,
      prefecture
    })
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
