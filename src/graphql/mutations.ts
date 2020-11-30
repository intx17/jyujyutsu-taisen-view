/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createInfectedData = /* GraphQL */ `
  mutation CreateInfectedData(
    $input: CreateInfectedDataInput!
    $condition: ModelInfectedDataConditionInput
  ) {
    createInfectedData(input: $input, condition: $condition) {
      date
      content
      createdAt
      updatedAt
    }
  }
`;
export const updateInfectedData = /* GraphQL */ `
  mutation UpdateInfectedData(
    $input: UpdateInfectedDataInput!
    $condition: ModelInfectedDataConditionInput
  ) {
    updateInfectedData(input: $input, condition: $condition) {
      date
      content
      createdAt
      updatedAt
    }
  }
`;
export const deleteInfectedData = /* GraphQL */ `
  mutation DeleteInfectedData(
    $input: DeleteInfectedDataInput!
    $condition: ModelInfectedDataConditionInput
  ) {
    deleteInfectedData(input: $input, condition: $condition) {
      date
      content
      createdAt
      updatedAt
    }
  }
`;
export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
      id
      name
      maxHP
      woeid
      commands {
        items {
          id
          name
          description
          attack
          criticalRate
          isOutdoor
          inCommandList
          playerID
          createdAt
          updatedAt
        }
        nextToken
      }
      battles {
        items {
          id
          date
          playerHP
          curseHP
          histories
          playerID
          curseID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
      id
      name
      maxHP
      woeid
      commands {
        items {
          id
          name
          description
          attack
          criticalRate
          isOutdoor
          inCommandList
          playerID
          createdAt
          updatedAt
        }
        nextToken
      }
      battles {
        items {
          id
          date
          playerHP
          curseHP
          histories
          playerID
          curseID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
      id
      name
      maxHP
      woeid
      commands {
        items {
          id
          name
          description
          attack
          criticalRate
          isOutdoor
          inCommandList
          playerID
          createdAt
          updatedAt
        }
        nextToken
      }
      battles {
        items {
          id
          date
          playerHP
          curseHP
          histories
          playerID
          curseID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createCurse = /* GraphQL */ `
  mutation CreateCurse(
    $input: CreateCurseInput!
    $condition: ModelCurseConditionInput
  ) {
    createCurse(input: $input, condition: $condition) {
      id
      name
      minNegative
      maxNegative
      maxHP
      attack
      hitRate
      imgSrc
      createdAt
      updatedAt
    }
  }
`;
export const updateCurse = /* GraphQL */ `
  mutation UpdateCurse(
    $input: UpdateCurseInput!
    $condition: ModelCurseConditionInput
  ) {
    updateCurse(input: $input, condition: $condition) {
      id
      name
      minNegative
      maxNegative
      maxHP
      attack
      hitRate
      imgSrc
      createdAt
      updatedAt
    }
  }
`;
export const deleteCurse = /* GraphQL */ `
  mutation DeleteCurse(
    $input: DeleteCurseInput!
    $condition: ModelCurseConditionInput
  ) {
    deleteCurse(input: $input, condition: $condition) {
      id
      name
      minNegative
      maxNegative
      maxHP
      attack
      hitRate
      imgSrc
      createdAt
      updatedAt
    }
  }
`;
export const createCommand = /* GraphQL */ `
  mutation CreateCommand(
    $input: CreateCommandInput!
    $condition: ModelCommandConditionInput
  ) {
    createCommand(input: $input, condition: $condition) {
      id
      name
      description
      attack
      criticalRate
      isOutdoor
      inCommandList
      playerID
      player {
        id
        name
        maxHP
        woeid
        commands {
          nextToken
        }
        battles {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCommand = /* GraphQL */ `
  mutation UpdateCommand(
    $input: UpdateCommandInput!
    $condition: ModelCommandConditionInput
  ) {
    updateCommand(input: $input, condition: $condition) {
      id
      name
      description
      attack
      criticalRate
      isOutdoor
      inCommandList
      playerID
      player {
        id
        name
        maxHP
        woeid
        commands {
          nextToken
        }
        battles {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCommand = /* GraphQL */ `
  mutation DeleteCommand(
    $input: DeleteCommandInput!
    $condition: ModelCommandConditionInput
  ) {
    deleteCommand(input: $input, condition: $condition) {
      id
      name
      description
      attack
      criticalRate
      isOutdoor
      inCommandList
      playerID
      player {
        id
        name
        maxHP
        woeid
        commands {
          nextToken
        }
        battles {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createBattle = /* GraphQL */ `
  mutation CreateBattle(
    $input: CreateBattleInput!
    $condition: ModelBattleConditionInput
  ) {
    createBattle(input: $input, condition: $condition) {
      id
      date
      playerHP
      curseHP
      histories
      playerID
      player {
        id
        name
        maxHP
        woeid
        commands {
          nextToken
        }
        battles {
          nextToken
        }
        createdAt
        updatedAt
      }
      curseID
      curse {
        id
        name
        minNegative
        maxNegative
        maxHP
        attack
        hitRate
        imgSrc
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateBattle = /* GraphQL */ `
  mutation UpdateBattle(
    $input: UpdateBattleInput!
    $condition: ModelBattleConditionInput
  ) {
    updateBattle(input: $input, condition: $condition) {
      id
      date
      playerHP
      curseHP
      histories
      playerID
      player {
        id
        name
        maxHP
        woeid
        commands {
          nextToken
        }
        battles {
          nextToken
        }
        createdAt
        updatedAt
      }
      curseID
      curse {
        id
        name
        minNegative
        maxNegative
        maxHP
        attack
        hitRate
        imgSrc
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteBattle = /* GraphQL */ `
  mutation DeleteBattle(
    $input: DeleteBattleInput!
    $condition: ModelBattleConditionInput
  ) {
    deleteBattle(input: $input, condition: $condition) {
      id
      date
      playerHP
      curseHP
      histories
      playerID
      player {
        id
        name
        maxHP
        woeid
        commands {
          nextToken
        }
        battles {
          nextToken
        }
        createdAt
        updatedAt
      }
      curseID
      curse {
        id
        name
        minNegative
        maxNegative
        maxHP
        attack
        hitRate
        imgSrc
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
