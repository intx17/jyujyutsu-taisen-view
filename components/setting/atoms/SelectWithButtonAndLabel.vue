<template>
  <div>
    <label v-if="!!labelText" :for="selectId">
      {{ labelText }}
    </label>
    <div class="select-and-button-container">
      <div class="nes-select select">
        <select :id="selectId" v-model="syncedSelectedValue" required>
          <option v-if="!!defaultOptionText" value="" disabled selected hidden>
            {{ defaultOptionText }}
          </option>
          <option
            v-for="(opt, index) in options"
            :key="index"
            :value="opt.value"
          >
            {{ opt.text }}
          </option>
        </select>
      </div>
      <button
        type="button"
        class="nes-btn edit-btn"
        @click="onClickButton"
      >
        編
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, PropSync, Vue } from 'nuxt-property-decorator'

// interfaces
import { ISelectOption } from '~/src/components/setting/atoms/selectWithLabel'

@Component({})
export default class SelectWithButtonAndLabel extends Vue {
  @PropSync('selectedValue', { type: String, required: true, default: '' })
  private syncedSelectedValue!: String

  @Prop({ type: String, required: true, default: '' })
  private selectId!: string;

  @Prop({ type: String, required: false, default: '' })
  private labelText?: string;

  @Prop({ type: String, required: false, default: '' })
  private defaultOptionText?: string;

  @Prop({ type: Array, required: true, default: () => ([]) })
  private options!: ISelectOption[];

  // methods
  @Emit()
  private onClickButton () {}
}
</script>

<style scoped>
.select-and-button-container {
  width: 100%;
  display: flex;
  flex-direction: row;
}
.select {
  width: 80%;
}
.edit-btn {
  width: 20%;
}
.nes-btn:hover {
  text-decoration: none;
  background-color: #fff;
}
.nes-btn:hover::after {
  box-shadow: inset -4px -4px #adafbc;
}
.nes-btn:active {
  text-decoration: none;
  background-color: #e7e7e7;
}
.nes-btn:active::after {
  box-shadow: inset -6px -6px #adafbc;
}
</style>
