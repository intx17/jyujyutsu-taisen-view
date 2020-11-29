<template>
  <section class="container">
    <curse-container class="index-curse-container" />
    <player-container class="index-player-container" />
  </section>
</template>

<script lang="ts">
import moment, { Moment } from 'moment';
import { API, JS } from 'aws-amplify';
import { Component, Prop, Vue } from "nuxt-property-decorator";

// components
import CurseContainer from '~/components/index/organisms/CurseContainer.vue';
import PlayerContainer from '~/components/index/organisms/PlayerContainer.vue';

// interfaces

@Component({
  layout: 'default',
  components: {
    PlayerContainer,
    CurseContainer
  },
  async asyncData ( context ) {
  //   try {
  //     const prefecture: string = '東京都';
  //     console.log(moment().format('YYYY-MM-DD'));

  //     const variables: ListCovid19PositivesQueryVariables = {
  //       filter: {
  //         date: {
  //           eq: moment().format('YYYY-MM-DD'),
  //         },
  //       },
  //     }
  //     const positives: ListCovid19Response = await API.graphql({
  //       query: listCovid19Positives,
  //       variables
  //     }) as ListCovid19Response

  //     // TMP unix time
  //     if (!positives.data.listCovid19Positives.items) {
  //       window.alert('今日の陽性者数データが存在しません');
  //     }
  //     // TODO: リファクタ
  //     const content: ParsedPositives = JSON.parse(JSON.parse(positives.data.listCovid19Positives.items[0].content))
  //     const count: number = content.data47[prefecture] ?? 100000000

  //     const deadline = moment('2050-01-01');
  //     return {
  //       deadline,
  //       prefecture,
  //       countOfPositives: count
  //     }
  //   } catch (e) {
  //     window.alert(e);
  //   }
  }
})
export default class Index extends Vue {
  // private deadline!: Moment;
  // private prefecture!: string;
  // private countOfPositives!: number;

  // get color (): AlertColor {
  //   if (this.countOfPositives < 100) return AlertColor.Blue;
  //   if (this.countOfPositives < 300) return AlertColor.Orange;
  //   return AlertColor.Red;
  // }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
.index-curse-container {
  margin: 15px 5% 0px 5%;
}
.index-player-container {
  margin: 15px 5% 0px 5%;
}
</style>
