<template>
  <section class="container">
    <setting-header />
    <prefecture-form />
    <command-form />
    <save-button class="save-btn" />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

// components
import SettingHeader from '~/components/setting/molecules/SettingHeader.vue';
import PrefectureForm from '~/components/setting/molecules/PrefectureForm.vue';
import CommandForm from '~/components/setting/molecules/CommandForm.vue';
import SaveButton from '~/components/setting/atoms/SaveButton.vue';

@Component({
  layout: 'default',
  components: {
    SettingHeader,
    PrefectureForm,
    CommandForm,
    SaveButton,
  }
})
export default class Setting extends Vue {
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
