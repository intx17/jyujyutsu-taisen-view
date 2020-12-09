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
      prefecture
      commands {
        items {
          id
          name
          description
          attack
          criticalRate
          isOutdoor
          inSelectedCommandList
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
          trends
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
        prefecture
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
      negative
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
        negative
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
      inSelectedCommandList
      playerID
      player {
        id
        name
        maxHP
        woeid
        prefecture
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
        inSelectedCommandList
        playerID
        player {
          id
          name
          maxHP
          woeid
          prefecture
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
export const getPlayerBattle = /* GraphQL */ `
  query GetPlayerBattle($id: ID!) {
    getPlayerBattle(id: $id) {
      id
      date
      playerHP
      curseHP
      histories
      trends
      playerID
      player {
        id
        name
        maxHP
        woeid
        prefecture
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
        negative
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
export const listPlayerBattles = /* GraphQL */ `
  query ListPlayerBattles(
    $filter: ModelPlayerBattleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayerBattles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        playerHP
        curseHP
        histories
        trends
        playerID
        player {
          id
          name
          maxHP
          woeid
          prefecture
          createdAt
          updatedAt
        }
        curseID
        curse {
          id
          name
          negative
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
export const getBattle = /* GraphQL */ `
  query GetBattle($id: ID!) {
    getBattle(id: $id) {
      id
      date
      curseHP
      histories
      trends
      curseID
      curse {
        id
        name
        negative
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
        curseHP
        histories
        trends
        curseID
        curse {
          id
          name
          negative
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
