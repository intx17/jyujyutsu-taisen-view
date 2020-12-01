import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

export enum ModalMode {
  Create,
  Update
}

interface ICommandDialog {
  isOpen: boolean
  mode: ModalMode
  name: string
  description: string
  attack: number
  criticalRate: number
  isOutdoor: boolean
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
    isOpen: false,
    mode: ModalMode.Create,
    name: '',
    description: '',
    attack: 0,
    criticalRate: 0,
    isOutdoor: false
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
  openCommandCreateDialog () {
    const dialog: ICommandDialog = {
      isOpen: false,
      mode: ModalMode.Create,
      name: '',
      description: '',
      attack: 0,
      criticalRate: 0,
      isOutdoor: false
    };
    dialog.isOpen = true;
    dialog.mode = ModalMode.Create;
    this.setCommandDialog(dialog);
  }

  @Action
  openCommandUpdateDialog () {
    const dialog: ICommandDialog = JSON.parse(JSON.stringify(this.commandDialog));
    dialog.isOpen = true;
    dialog.mode = ModalMode.Update;
    this.setCommandDialog(dialog);
  }

  @Action
  closeCommandDialog () {
    const dialog: ICommandDialog = JSON.parse(JSON.stringify(this.commandDialog));
    dialog.isOpen = false;
    this.setCommandDialog(dialog);
  }
}
