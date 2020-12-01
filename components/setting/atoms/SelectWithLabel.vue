<template>
  <div>
    <label v-if="!!labelText" :for="selectId">
      {{ labelText }}
    </label>
    <div class="nes-select">
      <select required :id="selectId" v-model="syncedSelectedValue">
        <option v-if="!!defaultOptionText" value="" disabled selected hidden>
          {{ defaultOptionText }}
        </option>
        <option v-for="(opt, index) in options"
          :key="index"
          :value="opt.value"
        >
          {{ opt.text }}
        </option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, PropSync, Vue } from 'nuxt-property-decorator';

// interfaces
import { ISelectOption } from '~/src/components/setting/atoms/selectWithLabel';

@Component({})
export default class SelectWithLabel extends Vue {
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
}
</script>
