import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

interface ICommandDialog {
  isOpen: boolean
}

interface ISettingStore {
  commandDialog: ICommandDialog
}

@Module({
  name: 'setting',
  stateFactory: true,
  namespaced: true,
})
export default class SettingStore extends VuexModule implements ISettingStore {
  commandDialog: ICommandDialog = {
    isOpen: false
  };

  @Mutation
  setCommandDialog(dialog: ICommandDialog) {
    this.commandDialog = dialog;
  }

  @Action
  openCommandDialog () {
    const dialog: ICommandDialog = JSON.parse(JSON.stringify(this.commandDialog));
    dialog.isOpen = true;
    this.setCommandDialog(dialog);
  }

  @Action
  closeCommandDialog () {
    const dialog: ICommandDialog = JSON.parse(JSON.stringify(this.commandDialog));
    dialog.isOpen = false;
    this.setCommandDialog(dialog);
  }
}
