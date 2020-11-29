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
import NewsHeader from '~/components/battle/atoms/NewsHeader.vue';
import CurseContainer from '~/components/battle/organisms/CurseContainer.vue';
import PlayerContainer from '~/components/battle/organisms/PlayerContainer.vue';
import { ListInfectedDatasQueryVariables } from '~/src/API';
import { listInfectedDatas } from '~/src/graphql/queries';
import { ListInfectedDatasResponse, ParsedInfectedData } from '~/src/graphql/domain/infectedData';

// interfaces

@Component({
  layout: 'default',
  components: {
    NewsHeader,
    PlayerContainer,
    CurseContainer
  },
  middleware: ['auth'],
  async asyncData ( context ) {
    try {
      const props = {
        newsText: '',
      }
      const prefecture: string = '東京都';

      const variables: ListInfectedDatasQueryVariables = {
        filter: {
          date: {
            eq: moment().format('YYYY-MM-DD'),
          },
        },
      }

      const infectedDatas: ListInfectedDatasResponse = await API.graphql(
        graphqlOperation(
          listInfectedDatas,
          variables,
      )) as ListInfectedDatasResponse

      if (!infectedDatas.data.listInfectedDatas.items) {
        props.newsText = '今日の陽性者数データが存在しません';
      }
      const content: ParsedInfectedData = JSON.parse(JSON.parse(infectedDatas.data.listInfectedDatas.items[0].content))
      props.newsText = `${moment().format('MM月DD日')}の${prefecture}の感染者数は${content.data47[prefecture]}人です`;

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
