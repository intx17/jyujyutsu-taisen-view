<template>
  <section class="container">
    <clock
      :deadline="deadline"
      :color="color"
    />
    <positives-info
      :prefecture="prefecture"
      :countOfPositives="countOfPositives"
    />
  </section>
</template>

<script lang="ts">
import moment, { Moment } from 'moment';
import { API, JS } from 'aws-amplify';
import { CreateCovid19PositiveMutationVariables, ListCovid19PositivesQueryVariables, ModelCovid19PositiveFilterInput } from '~/src/API';
import { createCovid19Positive } from '~/src/graphql/mutations'
import { Component, Prop, Vue } from "nuxt-property-decorator";

// components
import Clock from '@/components/index/atoms/Clock.vue';
import PositivesInfo from '@/components/index/atoms/PositivesInfo.vue'

// interfaces
import { GetPositivesResponse } from '@/src/entities/api/response/getPositivesResponse';
import { AlertColor } from "~/src/enums/alertColor";
import { listCovid19Positives } from '~/src/graphql/queries';
import { Covid19Positive, ListCovid19Response, ParsedPositives } from '~/src/graphql/domain/covid-19-positive';

@Component({
  components: {
    Clock,
    PositivesInfo
  },
  async asyncData ( context ) {
    try {
      const prefecture: string = '東京都';
      console.log(moment().format('YYYY-MM-DD'));

      const variables: ListCovid19PositivesQueryVariables = {
        filter: {
          date: {
            eq: moment().format('YYYY-MM-DD'),
          },
        },
      }
      const positives: ListCovid19Response = await API.graphql({
        query: listCovid19Positives,
        variables
      }) as ListCovid19Response

      // TMP unix time
      if (!positives.data.listCovid19Positives.items) {
        window.alert('今日の陽性者数データが存在しません');
      }
      // TODO: リファクタ
      const content: ParsedPositives = JSON.parse(JSON.parse(positives.data.listCovid19Positives.items[0].content))
      const count: number = content.data47[prefecture] ?? 100000000

      const deadline = moment('2050-01-01');
      return {
        deadline,
        prefecture,
        countOfPositives: count
      }
    } catch (e) {
      window.alert(e);
    }
  }
})
export default class Index extends Vue {
  private deadline!: Moment;
  private prefecture!: string;
  private countOfPositives!: number;

  get color (): AlertColor {
    if (this.countOfPositives < 100) return AlertColor.Blue;
    if (this.countOfPositives < 300) return AlertColor.Orange;
    return AlertColor.Red;
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  text-align: center;
}
</style>
