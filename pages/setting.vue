<template>
  <section class="container">
    <setting-header />
    <prefecture-form />
    <command-form />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

// components
import SettingHeader from '~/components/setting/molecules/SettingHeader.vue';
import PrefectureForm from '~/components/setting/molecules/PrefectureForm.vue';
import CommandForm from '~/components/setting/molecules/CommandForm.vue';


@Component({
  layout: 'default',
  components: {
    SettingHeader,
    PrefectureForm,
    CommandForm,
  }
})
export default class Setting extends Vue {
}
</script>

<style scoped>
.container {
  font-family: 'Nu KinakoMochi Reg';
}
.prefecture-setting-container {
  margin: 15px 5% 0px 5%;
}
</style>
