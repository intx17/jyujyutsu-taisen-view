import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class InfectedData {
  readonly id: string;
  readonly date: string;
  readonly content: string;
  constructor(init: ModelInit<InfectedData>);
  static copyOf(source: InfectedData, mutator: (draft: MutableModel<InfectedData>) => MutableModel<InfectedData> | void): InfectedData;
}

export declare class Player {
  readonly id: string;
  readonly name: string;
  readonly maxHP: number;
  readonly woeid: number;
  readonly prefecture: string;
  readonly commands?: (Command | null)[];
  readonly battles?: (Battle | null)[];
  constructor(init: ModelInit<Player>);
  static copyOf(source: Player, mutator: (draft: MutableModel<Player>) => MutableModel<Player> | void): Player;
}

export declare class Command {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly attack: number;
  readonly criticalRate: number;
  readonly isOutdoor: boolean;
  readonly inSelectedCommandList: boolean;
  readonly player?: Player;
  constructor(init: ModelInit<Command>);
  static copyOf(source: Command, mutator: (draft: MutableModel<Command>) => MutableModel<Command> | void): Command;
}

export declare class Battle {
  readonly id: string;
  readonly date: string;
  readonly playerHP: number;
  readonly playerMaxHP: number;
  readonly curseHP: number;
  readonly curseMaxHP: number;
  readonly histories?: string;
  readonly trends: string;
  readonly inProgress: boolean;
  readonly player?: Player;
  readonly curseID: string;
  readonly curse?: Curse;
  constructor(init: ModelInit<Battle>);
  static copyOf(source: Battle, mutator: (draft: MutableModel<Battle>) => MutableModel<Battle> | void): Battle;
}

export declare class Curse {
  readonly id: string;
  readonly name: string;
  readonly negative: number;
  readonly maxHP: number;
  readonly attack: number;
  readonly hitRate: number;
  readonly imgSrc: string;
  constructor(init: ModelInit<Curse>);
  static copyOf(source: Curse, mutator: (draft: MutableModel<Curse>) => MutableModel<Curse> | void): Curse;
}