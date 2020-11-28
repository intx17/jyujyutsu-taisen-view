import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class InfectedData {
  readonly id: string;
  readonly content: string;
  constructor(init: ModelInit<InfectedData>);
  static copyOf(source: InfectedData, mutator: (draft: MutableModel<InfectedData>) => MutableModel<InfectedData> | void): InfectedData;
}

export declare class User {
  readonly id: string;
  readonly name: string;
  readonly hp: number;
  readonly woeid: number;
  readonly commands?: (Command | null)[];
  readonly battles?: (Battle | null)[];
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Command {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly attack: number;
  readonly isOutdoor: boolean;
  readonly inCommandList: boolean;
  readonly user?: User;
  constructor(init: ModelInit<Command>);
  static copyOf(source: Command, mutator: (draft: MutableModel<Command>) => MutableModel<Command> | void): Command;
}

export declare class Battle {
  readonly id: string;
  readonly date: string;
  readonly userHP: number;
  readonly curseHP: number;
  readonly inAreaExpansion: boolean;
  readonly user?: User;
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