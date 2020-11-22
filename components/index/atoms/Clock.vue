<template>
  <div class="clock">
    <span v-text="remainingTime" :style="timeStyle" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { AlertColor } from "@/src/enums/alertColor";
import moment from "moment";
import { Moment } from "moment";

@Component({})
export default class Clock extends Vue {
  @Prop({ type: Object, required: true, default: {} })
  private deadline!: Moment;

  @Prop({ type: String, required: true, default: '#000' })
  private color!: AlertColor;

  private remainingTime: string = '';

  private intervalId: any = undefined;

  beforeDestory () {
    clearInterval(this.intervalId);
  }

  created () {
    this.intervalId = setInterval(() => this.updateRemainingTime(), 1000);
  }

  get timeStyle () {
    return {
      color: this.color,
      fontSize: '2rem',
      fontFamily: 'Timer',
      latterSpacing: '7px',
      whiteSpace: 'pre-wrap',
    }
  }
  
  updateRemainingTime () {
      const now = moment();
      const diffTime = this.deadline.diff(now);

      const duration = moment.duration(diffTime);

      this.remainingTime = this.toRemainingTimeText(duration.years(), duration.months(), duration.days(), duration.hours(), duration.minutes(), duration.seconds());
  }

  toRemainingTimeText (yearsDiff: number, montshDiff: number, daysDiff: number, hoursDiff: number, minutesDiff: number, secondsDiff: number) {
    return `${yearsDiff}Y ${this.zeroPadding(montshDiff, 2)}M ${this.zeroPadding(daysDiff, 2)}D\n${this.zeroPadding(hoursDiff, 2)}:${this.zeroPadding(minutesDiff, 2)}:${this.zeroPadding(secondsDiff, 2)}`;
  }

  zeroPadding (n: number, l: number): string {
    return (Array(l).join('0') + n).slice(-l);
  }
}
</script>

<style scoped>
.clock {
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>
