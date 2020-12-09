<template>
  <section class="container">
    <setting-header />
    <prefecture-form
      :prefectureValue.sync="prefectureValue"
    />
    <command-form />
    <command-dialog />
    <success-button
      class="save-btn"
      :text="'保存'"
      @on-click-button="save"
    />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { API, DataStore, graphqlOperation } from 'aws-amplify'
import { UpdatePlayerMutationVariables } from '~/src/API';
import { updatePlayer } from '~/src/graphql/mutations';
import { playerStore } from '~/utils/storeAccessor';
import { prefectureOptions } from '~/src/components/setting/molecules/prefectureForm';
import { JapaneseWoeid } from '~/src/enums/japanese-woeid';

// components
import SettingHeader from '~/components/setting/molecules/SettingHeader.vue';
import PrefectureForm from '~/components/setting/molecules/PrefectureForm.vue';
import CommandForm from '~/components/setting/organisms/CommandForm.vue';
import SuccessButton from '~/components/setting/atoms/SuccessButton.vue';
import CommandDialog from '~/components/setting/organisms/CommandDialog.vue';
import { Player } from '~/src/models';

@Component({
  layout: 'default',
  middleware: ['auth'],
  components: {
    SettingHeader,
    PrefectureForm,
    CommandForm,
    SuccessButton,
    CommandDialog,
  }
})
export default class Setting extends Vue {
  private prefectureValue: string = '';

  // methods
  private async save () {
    const playerInStore = playerStore.player;

    // ふつ〜起こり得ない
    if (playerInStore === null) {
      window.alert('ユーザーが存在しません');
      return;
    }

    const prefecture: string = prefectureOptions
      .find(o => o.value === this.prefectureValue)?.text ?? '東京都';

    // update DB
    const players = await DataStore.query(
      Player, 
      data => data.id('eq', playerInStore.id)
    );
    const player = players[0];
    await DataStore.save(player, updated => updated)
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
