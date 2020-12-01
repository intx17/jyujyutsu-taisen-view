<template>
  <div
    class="nes-container with-title is-centered command-form-container"
  >
    <p class="title">コマンド設定</p>
    <select-with-label
      v-for="(count) in [1, 2, 3]"
      class="command-select"
      :key="count"
      :selectedValue="''"
      :selectId="`command${count}`"
      :defaultOptionText="`▼コマンド${count}選択`"
      :options="commandOptions"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

// components
import SelectWithLabel from "~/components/setting/atoms/SelectWithLabel.vue";

@Component({
  components: {
    SelectWithLabel,
  },
})
export default class CommandForm extends Vue {
  private commandOptions = [
    { value: "1", text: "北海道" },
  ];
}
</script>

<style scoped>
.command-form-container {
  margin: 15px 5% 0px 5%;
}
.command-select + .command-select {
  margin-top: 15px;
}
</style>
