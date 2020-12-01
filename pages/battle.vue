<template>
  <section class="container">
    <news-header
      :text="newsText"
    />
    <curse-container
      class="index-curse-container"
      :curse="curse"
    />
    <player-container
      class="index-player-container"
      @on-click-attack-button="playerAttack"
    />
  </section>
</template>

<script lang="ts">
import moment, { Moment } from 'moment';
import { API, graphqlOperation, JS } from 'aws-amplify';
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { ICurse } from '~/src/components/battle/organisms/curseContainer';
import { playerStore, curseStore } from '~/utils/storeAccessor';

// components
import NewsHeader from '~/components/battle/molecules/NewsHeader.vue';
import CurseContainer from '~/components/battle/organisms/CurseContainer.vue';
import PlayerContainer from '~/components/battle/organisms/PlayerContainer.vue';
import { GetInfectedDataQueryVariables } from '~/src/API';
import { getInfectedData } from '~/src/graphql/queries';
import { GetInfectedDataResponse, ParsedInfectedData } from '~/src/graphql/domain/infectedData';

@Component({
  layout: 'default',
  middleware: ['auth'],
  components: {
    NewsHeader,
    PlayerContainer,
    CurseContainer
  },
  async asyncData ( context ) {
    try {
      const curse: ICurse = {
          name: 'ベルゼブブ',
          hp: 50,
          imgSrc: '/img/curse/beelzebub.png',
      }

      const props = {
        newsText: '',
        curse
      }

      const now = moment();
      if (playerStore.player === null) {
        window.alert('ユーザーデータが存在しません');
        return;
      }
      const prefecture: string = playerStore.player.prefecture;

      const variables: GetInfectedDataQueryVariables = {
        date: now.format('YYYY-MM-DD'),
      };
      const infectedData: GetInfectedDataResponse = await API.graphql(
        graphqlOperation(
          getInfectedData,
          variables,
      )) as GetInfectedDataResponse

      if (infectedData.data.getInfectedData.content) {
        const parsedInfectedData = JSON.parse(JSON.parse(infectedData.data.getInfectedData.content));
        props.newsText = `${prefecture}の感染者数は${parsedInfectedData.data47[prefecture]}人です`;
      } else {
        const yesterdayVariables: GetInfectedDataQueryVariables = {
          date: now.add(-1, 'day').format('YYYY-MM-DD'),
        };

        const yesterdayInfectedData: GetInfectedDataResponse = await API.graphql(
          graphqlOperation(
            getInfectedData,
            yesterdayVariables
        )) as GetInfectedDataResponse

        if (yesterdayInfectedData.data.getInfectedData.content) {
          const parsedInfectedData = JSON.parse(JSON.parse(yesterdayInfectedData.data.getInfectedData.content));
          props.newsText = `${prefecture}の感染者数は${parsedInfectedData.data47[prefecture]}人です`;
        } else {
          props.newsText = '感染者数データが存在しません';
        }
      }

      return props
    } catch (e) {
      console.error(JSON.stringify(e));
    }
  }
})
export default class Battle extends Vue {
  private newsText!: string;
  private curse!: ICurse;

  // methods
  private playerAttack () {
    if (curseStore.shaking) {
      return;
    }
    curseStore.setShaking(true);
    setTimeout(() => curseStore.setShaking(false), 3000);
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  font-family: 'Nu KinakoMochi Reg';
}
.index-curse-container {
  margin: 15px 5% 0px 5%;
}
.index-player-container {
  margin: 20px 5% 0px 5%;
}
</style>
