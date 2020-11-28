/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createInfectedData = /* GraphQL */ `
  mutation CreateInfectedData(
    $input: CreateInfectedDataInput!
    $condition: ModelInfectedDataConditionInput
  ) {
    createInfectedData(input: $input, condition: $condition) {
      id
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
      id
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
      id
      content
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      hp
      woeid
      commands {
        items {
          id
          name
          description
          attack
          isOutdoor
          inCommandList
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      battles {
        items {
          id
          date
          userHP
          curseHP
          inAreaExpansion
          userID
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      hp
      woeid
      commands {
        items {
          id
          name
          description
          attack
          isOutdoor
          inCommandList
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      battles {
        items {
          id
          date
          userHP
          curseHP
          inAreaExpansion
          userID
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      hp
      woeid
      commands {
        items {
          id
          name
          description
          attack
          isOutdoor
          inCommandList
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      battles {
        items {
          id
          date
          userHP
          curseHP
          inAreaExpansion
          userID
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
      isOutdoor
      inCommandList
      userID
      user {
        id
        name
        hp
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
      isOutdoor
      inCommandList
      userID
      user {
        id
        name
        hp
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
      isOutdoor
      inCommandList
      userID
      user {
        id
        name
        hp
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
      userHP
      curseHP
      inAreaExpansion
      userID
      user {
        id
        name
        hp
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
        date
        minNegative
        maxNegative
        hp
        attack
        hitRate
        imgSrc
        trends
        battleID
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
      userHP
      curseHP
      inAreaExpansion
      userID
      user {
        id
        name
        hp
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
        date
        minNegative
        maxNegative
        hp
        attack
        hitRate
        imgSrc
        trends
        battleID
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
      userHP
      curseHP
      inAreaExpansion
      userID
      user {
        id
        name
        hp
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
        date
        minNegative
        maxNegative
        hp
        attack
        hitRate
        imgSrc
        trends
        battleID
        createdAt
        updatedAt
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
      date
      minNegative
      maxNegative
      hp
      attack
      hitRate
      imgSrc
      trends
      battleID
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
      date
      minNegative
      maxNegative
      hp
      attack
      hitRate
      imgSrc
      trends
      battleID
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
      date
      minNegative
      maxNegative
      hp
      attack
      hitRate
      imgSrc
      trends
      battleID
      createdAt
      updatedAt
    }
  }
`;
