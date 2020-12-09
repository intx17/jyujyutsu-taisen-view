<template>
  <div
    class="nes-container with-title is-centered prefecture-form-container"
  >
    <p class="title">
      都道府県設定
    </p>
    <select-with-label
      :selected-value.sync="syncedPrefecture"
      :select-id="'prefecture'"
      :default-option-text="'▼都道府県を選択'"
      :options="prefectureOptions"
    />
  </div>
</template>

<script lang="ts">
import { Component, PropSync, Vue } from 'nuxt-property-decorator'

// components
import SelectWithLabel from '~/components/setting/atoms/SelectWithLabel.vue'
import { prefectureOptions as options } from '~/src/components/setting/molecules/prefectureForm'

@Component({
  components: {
    SelectWithLabel
  }
})
export default class PrefectureForm extends Vue {
  @PropSync('prefectureValue', { type: String, required: true, default: '' })
  private syncedPrefecture!: string;

  private prefectureOptions = options;
}
</script>

<style scoped>
.prefecture-form-container {
  margin: 15px 5% 0px 5%;
}
</style>
