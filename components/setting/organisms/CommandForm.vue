<template>
  <div
    class="nes-container with-title is-centered is-rounded command-form-container"
  >
    <p class="title">コマンド設定</p>
    <select-with-button-and-label
      v-for="(count) in [1, 2, 3]"
      class="command-select"
      :key="count"
      :selectedValue="''"
      :selectId="`command${count}`"
      :defaultOptionText="`▼コマンド${count}選択`"
      :options="commandOptions"
      @on-click-button="openDialog"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { settingStore } from '~/utils/storeAccessor';

// components
import SelectWithButtonAndLabel from "~/components/setting/atoms/SelectWithButtonAndLabel.vue";

@Component({
  components: {
    SelectWithButtonAndLabel,
  },
})
export default class CommandForm extends Vue {
  private commandOptions = [
    { value: "1", text: "北海道" },
  ];

  // methods
  private openDialog () {
    settingStore.openCommandCreateDialog();
  }
}
</script>

<style scoped>
.command-form-container {
  margin: 20px 5% 0px 5%;
}
.command-select + .command-select {
  margin-top: 15px;
}
</style>
