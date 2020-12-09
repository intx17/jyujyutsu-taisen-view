export interface ICommand {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly attack: number;
  readonly criticalRate: number;
  readonly isOutdoor: boolean;
  readonly inSelectedCommandList: boolean;
}
