/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getInfectedData = /* GraphQL */ `
  query GetInfectedData($date: AWSDate!) {
    getInfectedData(date: $date) {
      date
      content
      createdAt
      updatedAt
    }
  }
`;
export const listInfectedDatas = /* GraphQL */ `
  query ListInfectedDatas(
    $date: AWSDate
    $filter: ModelInfectedDataFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listInfectedDatas(
      date: $date
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        date
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
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
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCurse = /* GraphQL */ `
  query GetCurse($id: ID!) {
    getCurse(id: $id) {
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
        minNegative
        maxNegative
        maxHP
        attack
        hitRate
        imgSrc
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
        criticalRate
        isOutdoor
        inCommandList
        playerID
        player {
          id
          name
          maxHP
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
        playerHP
        curseHP
        histories
        playerID
        player {
          id
          name
          maxHP
          woeid
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
      nextToken
    }
  }
`;
