/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateInfectedDataInput = {
  date: string,
  content: string,
};

export type ModelInfectedDataConditionInput = {
  content?: ModelStringInput | null,
  and?: Array< ModelInfectedDataConditionInput | null > | null,
  or?: Array< ModelInfectedDataConditionInput | null > | null,
  not?: ModelInfectedDataConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateInfectedDataInput = {
  date: string,
  content?: string | null,
};

export type DeleteInfectedDataInput = {
  date: string,
};

export type CreatePlayerInput = {
  id?: string | null,
  name: string,
  maxHP: number,
  woeid: number,
  prefecture: string,
};

export type ModelPlayerConditionInput = {
  name?: ModelStringInput | null,
  maxHP?: ModelIntInput | null,
  woeid?: ModelIntInput | null,
  prefecture?: ModelStringInput | null,
  and?: Array< ModelPlayerConditionInput | null > | null,
  or?: Array< ModelPlayerConditionInput | null > | null,
  not?: ModelPlayerConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdatePlayerInput = {
  id: string,
  name?: string | null,
  maxHP?: number | null,
  woeid?: number | null,
  prefecture?: string | null,
};

export type DeletePlayerInput = {
  id?: string | null,
};

export type CreateCurseInput = {
  id?: string | null,
  name: string,
  negative: number,
  maxHP: number,
  attack: number,
  hitRate: number,
  imgSrc: string,
};

export type ModelCurseConditionInput = {
  name?: ModelStringInput | null,
  negative?: ModelIntInput | null,
  maxHP?: ModelIntInput | null,
  attack?: ModelIntInput | null,
  hitRate?: ModelFloatInput | null,
  imgSrc?: ModelStringInput | null,
  and?: Array< ModelCurseConditionInput | null > | null,
  or?: Array< ModelCurseConditionInput | null > | null,
  not?: ModelCurseConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateCurseInput = {
  id: string,
  name?: string | null,
  negative?: number | null,
  maxHP?: number | null,
  attack?: number | null,
  hitRate?: number | null,
  imgSrc?: string | null,
};

export type DeleteCurseInput = {
  id?: string | null,
};

export type CreateCommandInput = {
  id?: string | null,
  name: string,
  description: string,
  attack: number,
  criticalRate: number,
  isOutdoor: boolean,
  inSelectedCommandList: boolean,
  playerID: string,
};

export type ModelCommandConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  attack?: ModelIntInput | null,
  criticalRate?: ModelFloatInput | null,
  isOutdoor?: ModelBooleanInput | null,
  inSelectedCommandList?: ModelBooleanInput | null,
  playerID?: ModelIDInput | null,
  and?: Array< ModelCommandConditionInput | null > | null,
  or?: Array< ModelCommandConditionInput | null > | null,
  not?: ModelCommandConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCommandInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  attack?: number | null,
  criticalRate?: number | null,
  isOutdoor?: boolean | null,
  inSelectedCommandList?: boolean | null,
  playerID?: string | null,
};

export type DeleteCommandInput = {
  id?: string | null,
};

export type CreateBattleInput = {
  id?: string | null,
  date: string,
  playerHP: number,
  playerMaxHP: number,
  curseHP: number,
  curseMaxHP: number,
  histories?: string | null,
  trends: string,
  inProgress: boolean,
  playerID: string,
  curseID: string,
};

export type ModelBattleConditionInput = {
  date?: ModelStringInput | null,
  playerHP?: ModelIntInput | null,
  playerMaxHP?: ModelIntInput | null,
  curseHP?: ModelIntInput | null,
  curseMaxHP?: ModelIntInput | null,
  histories?: ModelStringInput | null,
  trends?: ModelStringInput | null,
  inProgress?: ModelBooleanInput | null,
  playerID?: ModelIDInput | null,
  curseID?: ModelIDInput | null,
  and?: Array< ModelBattleConditionInput | null > | null,
  or?: Array< ModelBattleConditionInput | null > | null,
  not?: ModelBattleConditionInput | null,
};

export type UpdateBattleInput = {
  id: string,
  date?: string | null,
  playerHP?: number | null,
  playerMaxHP?: number | null,
  curseHP?: number | null,
  curseMaxHP?: number | null,
  histories?: string | null,
  trends?: string | null,
  inProgress?: boolean | null,
  playerID?: string | null,
  curseID?: string | null,
};

export type DeleteBattleInput = {
  id?: string | null,
};

export type ModelInfectedDataFilterInput = {
  date?: ModelStringInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelInfectedDataFilterInput | null > | null,
  or?: Array< ModelInfectedDataFilterInput | null > | null,
  not?: ModelInfectedDataFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelPlayerFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  maxHP?: ModelIntInput | null,
  woeid?: ModelIntInput | null,
  prefecture?: ModelStringInput | null,
  and?: Array< ModelPlayerFilterInput | null > | null,
  or?: Array< ModelPlayerFilterInput | null > | null,
  not?: ModelPlayerFilterInput | null,
};

export type ModelCurseFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  negative?: ModelIntInput | null,
  maxHP?: ModelIntInput | null,
  attack?: ModelIntInput | null,
  hitRate?: ModelFloatInput | null,
  imgSrc?: ModelStringInput | null,
  and?: Array< ModelCurseFilterInput | null > | null,
  or?: Array< ModelCurseFilterInput | null > | null,
  not?: ModelCurseFilterInput | null,
};

export type ModelCommandFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  attack?: ModelIntInput | null,
  criticalRate?: ModelFloatInput | null,
  isOutdoor?: ModelBooleanInput | null,
  inSelectedCommandList?: ModelBooleanInput | null,
  playerID?: ModelIDInput | null,
  and?: Array< ModelCommandFilterInput | null > | null,
  or?: Array< ModelCommandFilterInput | null > | null,
  not?: ModelCommandFilterInput | null,
};

export type ModelBattleFilterInput = {
  id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  playerHP?: ModelIntInput | null,
  playerMaxHP?: ModelIntInput | null,
  curseHP?: ModelIntInput | null,
  curseMaxHP?: ModelIntInput | null,
  histories?: ModelStringInput | null,
  trends?: ModelStringInput | null,
  inProgress?: ModelBooleanInput | null,
  playerID?: ModelIDInput | null,
  curseID?: ModelIDInput | null,
  and?: Array< ModelBattleFilterInput | null > | null,
  or?: Array< ModelBattleFilterInput | null > | null,
  not?: ModelBattleFilterInput | null,
};

export type CreateInfectedDataMutationVariables = {
  input: CreateInfectedDataInput,
  condition?: ModelInfectedDataConditionInput | null,
};

export type CreateInfectedDataMutation = {
  createInfectedData:  {
    __typename: "InfectedData",
    date: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateInfectedDataMutationVariables = {
  input: UpdateInfectedDataInput,
  condition?: ModelInfectedDataConditionInput | null,
};

export type UpdateInfectedDataMutation = {
  updateInfectedData:  {
    __typename: "InfectedData",
    date: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteInfectedDataMutationVariables = {
  input: DeleteInfectedDataInput,
  condition?: ModelInfectedDataConditionInput | null,
};

export type DeleteInfectedDataMutation = {
  deleteInfectedData:  {
    __typename: "InfectedData",
    date: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePlayerMutationVariables = {
  input: CreatePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type CreatePlayerMutation = {
  createPlayer:  {
    __typename: "Player",
    id: string,
    name: string,
    maxHP: number,
    woeid: number,
    prefecture: string,
    commands:  {
      __typename: "ModelCommandConnection",
      items:  Array< {
        __typename: "Command",
        id: string,
        name: string,
        description: string,
        attack: number,
        criticalRate: number,
        isOutdoor: boolean,
        inSelectedCommandList: boolean,
        playerID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    battles:  {
      __typename: "ModelBattleConnection",
      items:  Array< {
        __typename: "Battle",
        id: string,
        date: string,
        playerHP: number,
        playerMaxHP: number,
        curseHP: number,
        curseMaxHP: number,
        histories: string | null,
        trends: string,
        inProgress: boolean,
        playerID: string,
        curseID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePlayerMutationVariables = {
  input: UpdatePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type UpdatePlayerMutation = {
  updatePlayer:  {
    __typename: "Player",
    id: string,
    name: string,
    maxHP: number,
    woeid: number,
    prefecture: string,
    commands:  {
      __typename: "ModelCommandConnection",
      items:  Array< {
        __typename: "Command",
        id: string,
        name: string,
        description: string,
        attack: number,
        criticalRate: number,
        isOutdoor: boolean,
        inSelectedCommandList: boolean,
        playerID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    battles:  {
      __typename: "ModelBattleConnection",
      items:  Array< {
        __typename: "Battle",
        id: string,
        date: string,
        playerHP: number,
        playerMaxHP: number,
        curseHP: number,
        curseMaxHP: number,
        histories: string | null,
        trends: string,
        inProgress: boolean,
        playerID: string,
        curseID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePlayerMutationVariables = {
  input: DeletePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type DeletePlayerMutation = {
  deletePlayer:  {
    __typename: "Player",
    id: string,
    name: string,
    maxHP: number,
    woeid: number,
    prefecture: string,
    commands:  {
      __typename: "ModelCommandConnection",
      items:  Array< {
        __typename: "Command",
        id: string,
        name: string,
        description: string,
        attack: number,
        criticalRate: number,
        isOutdoor: boolean,
        inSelectedCommandList: boolean,
        playerID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    battles:  {
      __typename: "ModelBattleConnection",
      items:  Array< {
        __typename: "Battle",
        id: string,
        date: string,
        playerHP: number,
        playerMaxHP: number,
        curseHP: number,
        curseMaxHP: number,
        histories: string | null,
        trends: string,
        inProgress: boolean,
        playerID: string,
        curseID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCurseMutationVariables = {
  input: CreateCurseInput,
  condition?: ModelCurseConditionInput | null,
};

export type CreateCurseMutation = {
  createCurse:  {
    __typename: "Curse",
    id: string,
    name: string,
    negative: number,
    maxHP: number,
    attack: number,
    hitRate: number,
    imgSrc: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCurseMutationVariables = {
  input: UpdateCurseInput,
  condition?: ModelCurseConditionInput | null,
};

export type UpdateCurseMutation = {
  updateCurse:  {
    __typename: "Curse",
    id: string,
    name: string,
    negative: number,
    maxHP: number,
    attack: number,
    hitRate: number,
    imgSrc: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCurseMutationVariables = {
  input: DeleteCurseInput,
  condition?: ModelCurseConditionInput | null,
};

export type DeleteCurseMutation = {
  deleteCurse:  {
    __typename: "Curse",
    id: string,
    name: string,
    negative: number,
    maxHP: number,
    attack: number,
    hitRate: number,
    imgSrc: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCommandMutationVariables = {
  input: CreateCommandInput,
  condition?: ModelCommandConditionInput | null,
};

export type CreateCommandMutation = {
  createCommand:  {
    __typename: "Command",
    id: string,
    name: string,
    description: string,
    attack: number,
    criticalRate: number,
    isOutdoor: boolean,
    inSelectedCommandList: boolean,
    playerID: string,
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      maxHP: number,
      woeid: number,
      prefecture: string,
      commands:  {
        __typename: "ModelCommandConnection",
        nextToken: string | null,
      } | null,
      battles:  {
        __typename: "ModelBattleConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCommandMutationVariables = {
  input: UpdateCommandInput,
  condition?: ModelCommandConditionInput | null,
};

export type UpdateCommandMutation = {
  updateCommand:  {
    __typename: "Command",
    id: string,
    name: string,
    description: string,
    attack: number,
    criticalRate: number,
    isOutdoor: boolean,
    inSelectedCommandList: boolean,
    playerID: string,
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      maxHP: number,
      woeid: number,
      prefecture: string,
      commands:  {
        __typename: "ModelCommandConnection",
        nextToken: string | null,
      } | null,
      battles:  {
        __typename: "ModelBattleConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCommandMutationVariables = {
  input: DeleteCommandInput,
  condition?: ModelCommandConditionInput | null,
};

export type DeleteCommandMutation = {
  deleteCommand:  {
    __typename: "Command",
    id: string,
    name: string,
    description: string,
    attack: number,
    criticalRate: number,
    isOutdoor: boolean,
    inSelectedCommandList: boolean,
    playerID: string,
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      maxHP: number,
      woeid: number,
      prefecture: string,
      commands:  {
        __typename: "ModelCommandConnection",
        nextToken: string | null,
      } | null,
      battles:  {
        __typename: "ModelBattleConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBattleMutationVariables = {
  input: CreateBattleInput,
  condition?: ModelBattleConditionInput | null,
};

export type CreateBattleMutation = {
  createBattle:  {
    __typename: "Battle",
    id: string,
    date: string,
    playerHP: number,
    playerMaxHP: number,
    curseHP: number,
    curseMaxHP: number,
    histories: string | null,
    trends: string,
    inProgress: boolean,
    playerID: string,
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      maxHP: number,
      woeid: number,
      prefecture: string,
      commands:  {
        __typename: "ModelCommandConnection",
        nextToken: string | null,
      } | null,
      battles:  {
        __typename: "ModelBattleConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    curseID: string,
    curse:  {
      __typename: "Curse",
      id: string,
      name: string,
      negative: number,
      maxHP: number,
      attack: number,
      hitRate: number,
      imgSrc: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBattleMutationVariables = {
  input: UpdateBattleInput,
  condition?: ModelBattleConditionInput | null,
};

export type UpdateBattleMutation = {
  updateBattle:  {
    __typename: "Battle",
    id: string,
    date: string,
    playerHP: number,
    playerMaxHP: number,
    curseHP: number,
    curseMaxHP: number,
    histories: string | null,
    trends: string,
    inProgress: boolean,
    playerID: string,
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      maxHP: number,
      woeid: number,
      prefecture: string,
      commands:  {
        __typename: "ModelCommandConnection",
        nextToken: string | null,
      } | null,
      battles:  {
        __typename: "ModelBattleConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    curseID: string,
    curse:  {
      __typename: "Curse",
      id: string,
      name: string,
      negative: number,
      maxHP: number,
      attack: number,
      hitRate: number,
      imgSrc: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBattleMutationVariables = {
  input: DeleteBattleInput,
  condition?: ModelBattleConditionInput | null,
};

export type DeleteBattleMutation = {
  deleteBattle:  {
    __typename: "Battle",
    id: string,
    date: string,
    playerHP: number,
    playerMaxHP: number,
    curseHP: number,
    curseMaxHP: number,
    histories: string | null,
    trends: string,
    inProgress: boolean,
    playerID: string,
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      maxHP: number,
      woeid: number,
      prefecture: string,
      commands:  {
        __typename: "ModelCommandConnection",
        nextToken: string | null,
      } | null,
      battles:  {
        __typename: "ModelBattleConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    curseID: string,
    curse:  {
      __typename: "Curse",
      id: string,
      name: string,
      negative: number,
      maxHP: number,
      attack: number,
      hitRate: number,
      imgSrc: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetInfectedDataQueryVariables = {
  date: string,
};

export type GetInfectedDataQuery = {
  getInfectedData:  {
    __typename: "InfectedData",
    date: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListInfectedDatasQueryVariables = {
  date?: string | null,
  filter?: ModelInfectedDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListInfectedDatasQuery = {
  listInfectedDatas:  {
    __typename: "ModelInfectedDataConnection",
    items:  Array< {
      __typename: "InfectedData",
      date: string,
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetPlayerQueryVariables = {
  id: string,
};

export type GetPlayerQuery = {
  getPlayer:  {
    __typename: "Player",
    id: string,
    name: string,
    maxHP: number,
    woeid: number,
    prefecture: string,
    commands:  {
      __typename: "ModelCommandConnection",
      items:  Array< {
        __typename: "Command",
        id: string,
        name: string,
        description: string,
        attack: number,
        criticalRate: number,
        isOutdoor: boolean,
        inSelectedCommandList: boolean,
        playerID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    battles:  {
      __typename: "ModelBattleConnection",
      items:  Array< {
        __typename: "Battle",
        id: string,
        date: string,
        playerHP: number,
        playerMaxHP: number,
        curseHP: number,
        curseMaxHP: number,
        histories: string | null,
        trends: string,
        inProgress: boolean,
        playerID: string,
        curseID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPlayersQueryVariables = {
  filter?: ModelPlayerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlayersQuery = {
  listPlayers:  {
    __typename: "ModelPlayerConnection",
    items:  Array< {
      __typename: "Player",
      id: string,
      name: string,
      maxHP: number,
      woeid: number,
      prefecture: string,
      commands:  {
        __typename: "ModelCommandConnection",
        nextToken: string | null,
      } | null,
      battles:  {
        __typename: "ModelBattleConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCurseQueryVariables = {
  id: string,
};

export type GetCurseQuery = {
  getCurse:  {
    __typename: "Curse",
    id: string,
    name: string,
    negative: number,
    maxHP: number,
    attack: number,
    hitRate: number,
    imgSrc: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCursesQueryVariables = {
  filter?: ModelCurseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCursesQuery = {
  listCurses:  {
    __typename: "ModelCurseConnection",
    items:  Array< {
      __typename: "Curse",
      id: string,
      name: string,
      negative: number,
      maxHP: number,
      attack: number,
      hitRate: number,
      imgSrc: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCommandQueryVariables = {
  id: string,
};

export type GetCommandQuery = {
  getCommand:  {
    __typename: "Command",
    id: string,
    name: string,
    description: string,
    attack: number,
    criticalRate: number,
    isOutdoor: boolean,
    inSelectedCommandList: boolean,
    playerID: string,
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      maxHP: number,
      woeid: number,
      prefecture: string,
      commands:  {
        __typename: "ModelCommandConnection",
        nextToken: string | null,
      } | null,
      battles:  {
        __typename: "ModelBattleConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCommandsQueryVariables = {
  filter?: ModelCommandFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommandsQuery = {
  listCommands:  {
    __typename: "ModelCommandConnection",
    items:  Array< {
      __typename: "Command",
      id: string,
      name: string,
      description: string,
      attack: number,
      criticalRate: number,
      isOutdoor: boolean,
      inSelectedCommandList: boolean,
      playerID: string,
      player:  {
        __typename: "Player",
        id: string,
        name: string,
        maxHP: number,
        woeid: number,
        prefecture: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetBattleQueryVariables = {
  id: string,
};

export type GetBattleQuery = {
  getBattle:  {
    __typename: "Battle",
    id: string,
    date: string,
    playerHP: number,
    playerMaxHP: number,
    curseHP: number,
    curseMaxHP: number,
    histories: string | null,
    trends: string,
    inProgress: boolean,
    playerID: string,
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      maxHP: number,
      woeid: number,
      prefecture: string,
      commands:  {
        __typename: "ModelCommandConnection",
        nextToken: string | null,
      } | null,
      battles:  {
        __typename: "ModelBattleConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    curseID: string,
    curse:  {
      __typename: "Curse",
      id: string,
      name: string,
      negative: number,
      maxHP: number,
      attack: number,
      hitRate: number,
      imgSrc: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBattlesQueryVariables = {
  filter?: ModelBattleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBattlesQuery = {
  listBattles:  {
    __typename: "ModelBattleConnection",
    items:  Array< {
      __typename: "Battle",
      id: string,
      date: string,
      playerHP: number,
      playerMaxHP: number,
      curseHP: number,
      curseMaxHP: number,
      histories: string | null,
      trends: string,
      inProgress: boolean,
      playerID: string,
      player:  {
        __typename: "Player",
        id: string,
        name: string,
        maxHP: number,
        woeid: number,
        prefecture: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      curseID: string,
      curse:  {
        __typename: "Curse",
        id: string,
        name: string,
        negative: number,
        maxHP: number,
        attack: number,
        hitRate: number,
        imgSrc: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateInfectedDataSubscription = {
  onCreateInfectedData:  {
    __typename: "InfectedData",
    date: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateInfectedDataSubscription = {
  onUpdateInfectedData:  {
    __typename: "InfectedData",
    date: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteInfectedDataSubscription = {
  onDeleteInfectedData:  {
    __typename: "InfectedData",
    date: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePlayerSubscription = {
  onCreatePlayer:  {
    __typename: "Player",
    id: string,
    name: string,
    maxHP: number,
    woeid: number,
    prefecture: string,
    commands:  {
      __typename: "ModelCommandConnection",
      items:  Array< {
        __typename: "Command",
        id: string,
        name: string,
        description: string,
        attack: number,
        criticalRate: number,
        isOutdoor: boolean,
        inSelectedCommandList: boolean,
        playerID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    battles:  {
      __typename: "ModelBattleConnection",
      items:  Array< {
        __typename: "Battle",
        id: string,
        date: string,
        playerHP: number,
        playerMaxHP: number,
        curseHP: number,
        curseMaxHP: number,
        histories: string | null,
        trends: string,
        inProgress: boolean,
        playerID: string,
        curseID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePlayerSubscription = {
  onUpdatePlayer:  {
    __typename: "Player",
    id: string,
    name: string,
    maxHP: number,
    woeid: number,
    prefecture: string,
    commands:  {
      __typename: "ModelCommandConnection",
      items:  Array< {
        __typename: "Command",
        id: string,
        name: string,
        description: string,
        attack: number,
        criticalRate: number,
        isOutdoor: boolean,
        inSelectedCommandList: boolean,
        playerID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    battles:  {
      __typename: "ModelBattleConnection",
      items:  Array< {
        __typename: "Battle",
        id: string,
        date: string,
        playerHP: number,
        playerMaxHP: number,
        curseHP: number,
        curseMaxHP: number,
        histories: string | null,
        trends: string,
        inProgress: boolean,
        playerID: string,
        curseID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePlayerSubscription = {
  onDeletePlayer:  {
    __typename: "Player",
    id: string,
    name: string,
    maxHP: number,
    woeid: number,
    prefecture: string,
    commands:  {
      __typename: "ModelCommandConnection",
      items:  Array< {
        __typename: "Command",
        id: string,
        name: string,
        description: string,
        attack: number,
        criticalRate: number,
        isOutdoor: boolean,
        inSelectedCommandList: boolean,
        playerID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    battles:  {
      __typename: "ModelBattleConnection",
      items:  Array< {
        __typename: "Battle",
        id: string,
        date: string,
        playerHP: number,
        playerMaxHP: number,
        curseHP: number,
        curseMaxHP: number,
        histories: string | null,
        trends: string,
        inProgress: boolean,
        playerID: string,
        curseID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCurseSubscription = {
  onCreateCurse:  {
    __typename: "Curse",
    id: string,
    name: string,
    negative: number,
    maxHP: number,
    attack: number,
    hitRate: number,
    imgSrc: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCurseSubscription = {
  onUpdateCurse:  {
    __typename: "Curse",
    id: string,
    name: string,
    negative: number,
    maxHP: number,
    attack: number,
    hitRate: number,
    imgSrc: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCurseSubscription = {
  onDeleteCurse:  {
    __typename: "Curse",
    id: string,
    name: string,
    negative: number,
    maxHP: number,
    attack: number,
    hitRate: number,
    imgSrc: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCommandSubscription = {
  onCreateCommand:  {
    __typename: "Command",
    id: string,
    name: string,
    description: string,
    attack: number,
    criticalRate: number,
    isOutdoor: boolean,
    inSelectedCommandList: boolean,
    playerID: string,
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      maxHP: number,
      woeid: number,
      prefecture: string,
      commands:  {
        __typename: "ModelCommandConnection",
        nextToken: string | null,
      } | null,
      battles:  {
        __typename: "ModelBattleConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommandSubscription = {
  onUpdateCommand:  {
    __typename: "Command",
    id: string,
    name: string,
    description: string,
    attack: number,
    criticalRate: number,
    isOutdoor: boolean,
    inSelectedCommandList: boolean,
    playerID: string,
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      maxHP: number,
      woeid: number,
      prefecture: string,
      commands:  {
        __typename: "ModelCommandConnection",
        nextToken: string | null,
      } | null,
      battles:  {
        __typename: "ModelBattleConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommandSubscription = {
  onDeleteCommand:  {
    __typename: "Command",
    id: string,
    name: string,
    description: string,
    attack: number,
    criticalRate: number,
    isOutdoor: boolean,
    inSelectedCommandList: boolean,
    playerID: string,
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      maxHP: number,
      woeid: number,
      prefecture: string,
      commands:  {
        __typename: "ModelCommandConnection",
        nextToken: string | null,
      } | null,
      battles:  {
        __typename: "ModelBattleConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBattleSubscription = {
  onCreateBattle:  {
    __typename: "Battle",
    id: string,
    date: string,
    playerHP: number,
    playerMaxHP: number,
    curseHP: number,
    curseMaxHP: number,
    histories: string | null,
    trends: string,
    inProgress: boolean,
    playerID: string,
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      maxHP: number,
      woeid: number,
      prefecture: string,
      commands:  {
        __typename: "ModelCommandConnection",
        nextToken: string | null,
      } | null,
      battles:  {
        __typename: "ModelBattleConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    curseID: string,
    curse:  {
      __typename: "Curse",
      id: string,
      name: string,
      negative: number,
      maxHP: number,
      attack: number,
      hitRate: number,
      imgSrc: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBattleSubscription = {
  onUpdateBattle:  {
    __typename: "Battle",
    id: string,
    date: string,
    playerHP: number,
    playerMaxHP: number,
    curseHP: number,
    curseMaxHP: number,
    histories: string | null,
    trends: string,
    inProgress: boolean,
    playerID: string,
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      maxHP: number,
      woeid: number,
      prefecture: string,
      commands:  {
        __typename: "ModelCommandConnection",
        nextToken: string | null,
      } | null,
      battles:  {
        __typename: "ModelBattleConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    curseID: string,
    curse:  {
      __typename: "Curse",
      id: string,
      name: string,
      negative: number,
      maxHP: number,
      attack: number,
      hitRate: number,
      imgSrc: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBattleSubscription = {
  onDeleteBattle:  {
    __typename: "Battle",
    id: string,
    date: string,
    playerHP: number,
    playerMaxHP: number,
    curseHP: number,
    curseMaxHP: number,
    histories: string | null,
    trends: string,
    inProgress: boolean,
    playerID: string,
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      maxHP: number,
      woeid: number,
      prefecture: string,
      commands:  {
        __typename: "ModelCommandConnection",
        nextToken: string | null,
      } | null,
      battles:  {
        __typename: "ModelBattleConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    curseID: string,
    curse:  {
      __typename: "Curse",
      id: string,
      name: string,
      negative: number,
      maxHP: number,
      attack: number,
      hitRate: number,
      imgSrc: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
