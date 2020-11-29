import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class InfectedData {
  readonly id: string;
  readonly content: string;
  readonly date: string;
  constructor(init: ModelInit<InfectedData>);
  static copyOf(source: InfectedData, mutator: (draft: MutableModel<InfectedData>) => MutableModel<InfectedData> | void): InfectedData;
}

export declare class Player {
  readonly id: string;
  readonly name: string;
  readonly hp: number;
  readonly woeid: number;
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
  readonly isOutdoor: boolean;
  readonly inCommandList: boolean;
  readonly player?: Player;
  constructor(init: ModelInit<Command>);
  static copyOf(source: Command, mutator: (draft: MutableModel<Command>) => MutableModel<Command> | void): Command;
}

export declare class Battle {
  readonly id: string;
  readonly date: string;
  readonly playerHP: number;
  readonly curseHP: number;
  readonly inAreaExpansion: boolean;
  readonly player?: Player;
  readonly curseID: string;
  readonly curse?: Curse;
  constructor(init: ModelInit<Battle>);
  static copyOf(source: Battle, mutator: (draft: MutableModel<Battle>) => MutableModel<Battle> | void): Battle;
}

export declare class Curse {
  readonly id: string;
  readonly name: string;
  readonly date: string;
  readonly minNegative: number;
  readonly maxNegative: number;
  readonly hp: number;
  readonly attack: number;
  readonly hitRate: number;
  readonly imgSrc: string;
  readonly trends: string;
  readonly battleID: string;
  constructor(init: ModelInit<Curse>);
  static copyOf(source: Curse, mutator: (draft: MutableModel<Curse>) => MutableModel<Curse> | void): Curse;
}