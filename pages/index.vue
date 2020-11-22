<template>
  <section class="container">
    <clock
      :deadline="deadline"
      :color="color"
    />
    <infections
      :numberOfInfected="numberOfInfected"
    />
  </section>
</template>

<script lang="ts">
import moment, { Moment } from 'moment';
import { Component, Prop, Vue } from "nuxt-property-decorator";

// components
import Clock from '@/components/index/atoms/Clock.vue';
import Infections from '@/components/index/atoms/Infections.vue';

// interfaces
import { GetPositivesResponse } from '@/src/entities/api/response/getPositivesResponse';
import { AlertColor } from "~/src/enums/alertColor";

@Component({
  components: {
    Clock,
    Infections
  },
  async asyncData ( { $axios }) {
    try {
      const response: GetPositivesResponse = await $axios.$get('ttps://5b9wubkeh9.execute-api.ap-northeast-1.amazonaws.com/prod/v1/positives?prefecture=東京都');

      // TMP unix time
      const deadline = moment('2050-01-01');

      return {
        deadline,
        numberOfInfected: response.positives.latestPositives
      }
    } catch (e) {
      console.log(e)
      window.alert(e);
    }
  }
})
export default class Index extends Vue {
  private deadline!: Moment;
  private numberOfInfected!: number;

  get color (): AlertColor {
    if (this.numberOfInfected < 100) return AlertColor.Blue;
    if (this.numberOfInfected < 300) return AlertColor.Orange;
    return AlertColor.Red;
  }
}
</script>
