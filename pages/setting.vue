<template>
  <section class="container">
    <setting-header />
    <prefecture-form
      :prefectureValue.sync="prefectureValue"
    />
    <command-form />
    <save-button
      class="save-btn"
      @on-click-save-button="save"
    />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { API, graphqlOperation } from 'aws-amplify'
import { UpdatePlayerMutationVariables } from '~/src/API';
import { updatePlayer } from '~/src/graphql/mutations';
import { playerStore } from '~/utils/storeAccessor';

// components
import SettingHeader from '~/components/setting/molecules/SettingHeader.vue';
import PrefectureForm from '~/components/setting/molecules/PrefectureForm.vue';
import CommandForm from '~/components/setting/molecules/CommandForm.vue';
import SaveButton from '~/components/setting/atoms/SaveButton.vue';
import { prefectureOptions } from '~/src/components/setting/molecules/prefectureForm';
import { JapaneseWoeid } from '~/src/enums/japanese-woeid';

@Component({
  layout: 'default',
  middleware: ['auth'],
  components: {
    SettingHeader,
    PrefectureForm,
    CommandForm,
    SaveButton,
  }
})
export default class Setting extends Vue {
  private prefectureValue: string = '';

  // methods
  private async save () {
    const player = playerStore.player;

    // ふつ〜起こり得ない
    if (player === null) {
      window.alert('ユーザーが存在しません');
      return;
    }

    const prefecture: string = prefectureOptions
      .find(o => o.value === this.prefectureValue)?.text ?? '東京都';

    // update DB
    const updatePlayerVar: UpdatePlayerMutationVariables = {
      input: {
        id: player.id,
        prefecture
      }
    }
    await API.graphql(graphqlOperation(updatePlayer, updatePlayerVar));

    // update store
    playerStore.setPlayer({
      id: player.id,
      hp: player.hp,
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
