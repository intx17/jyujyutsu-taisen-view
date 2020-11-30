<template>
  <section class="container">
    <news-header
      :text="newsText"
    />
    <curse-container class="index-curse-container" />
    <player-container class="index-player-container" />
  </section>
</template>

<script lang="ts">
import moment, { Moment } from 'moment';
import { API, graphqlOperation, JS } from 'aws-amplify';
import { Component, Prop, Vue } from "nuxt-property-decorator";

// components
import NewsHeader from '~/components/battle/molecules/NewsHeader.vue';
import CurseContainer from '~/components/battle/organisms/CurseContainer.vue';
import PlayerContainer from '~/components/battle/organisms/PlayerContainer.vue';
import { GetInfectedDataQueryVariables } from '~/src/API';
import { getInfectedData } from '~/src/graphql/queries';
import { GetInfectedDataResponse, ParsedInfectedData } from '~/src/graphql/domain/infectedData';

@Component({
  layout: 'default',
  components: {
    NewsHeader,
    PlayerContainer,
    CurseContainer
  },
  async asyncData ( context ) {
    try {
      const props = {
        newsText: '',
      }
      const now = moment();
      const prefecture: string = '東京都';

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
