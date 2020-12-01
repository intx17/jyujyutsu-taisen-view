<template>
  <dialog v-if="isOpen" class="nes-dialog is-rounded" id="command-dialog" open>
    <div class="icon-container" @click="closeDialog">
      <i class="nes-icon close"></i>
    </div>
    <form method="dialog">
      <div class="nes-field">
        <label for="name">Name</label>
        <input type="text" id="name" class="nes-input">
      </div>
      <div>
        <label for="description">Description</label>
        <textarea id="description" class="nes-textarea"></textarea>
      </div>
      <div class="nes-field">
        <label for="attack">Attack</label>
        <input type="number" id="attack" class="nes-input">
      </div>
      <div class="nes-field">
        <label for="critical">Critical</label>
        <input type="number" id="critical" class="nes-input">
      </div>
      <div class="checkbox-container">
        <label>
          <input type="checkbox" class="nes-checkbox" checked />
          <span>Outdoor Activity</span>
        </label>
      </div>
      <success-button
        class="finish-btn"
        :text="'完了'"
        @on-click-button="finish"
      />
    </form>
  </dialog>
</template>

<script lang="ts">
import { Component, PropSync, Vue } from 'nuxt-property-decorator';
import { settingStore } from '~/utils/storeAccessor';

// component
import SuccessButton from '~/components/setting/atoms/SuccessButton.vue';

@Component({
  components: {
    SuccessButton,
  }
})
export default class CommonDialog extends Vue {
  // computed
  private get isOpen () {
    return settingStore.commandDialog.isOpen;
  }

  // methods
  private closeDialog () {
    settingStore.closeCommandDialog();
  }
}
</script>

<style scoped>
.nes-dialog {
  z-index: 100;
  margin: 20px 5% 0px 5%;
}
.icon-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.checkbox-container {
  margin-top: 15px;
}
.finish-btn {
  margin-top: 15px;
}
</style>
