/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getInfectedData = /* GraphQL */ `
  query GetInfectedData($id: ID!) {
    getInfectedData(id: $id) {
      id
      content
      createdAt
      updatedAt
    }
  }
`;
export const listInfectedDatas = /* GraphQL */ `
  query ListInfectedDatas(
    $filter: ModelInfectedDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInfectedDatas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCommand = /* GraphQL */ `
  query GetCommand($id: ID!) {
    getCommand(id: $id) {
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
export const listCommands = /* GraphQL */ `
  query ListCommands(
    $filter: ModelCommandFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommands(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBattle = /* GraphQL */ `
  query GetBattle($id: ID!) {
    getBattle(id: $id) {
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
export const listBattles = /* GraphQL */ `
  query ListBattles(
    $filter: ModelBattleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBattles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCurse = /* GraphQL */ `
  query GetCurse($id: ID!) {
    getCurse(id: $id) {
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
export const listCurses = /* GraphQL */ `
  query ListCurses(
    $filter: ModelCurseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCurses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
