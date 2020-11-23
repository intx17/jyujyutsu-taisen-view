/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCovid19Positive = /* GraphQL */ `
  query GetCovid19Positive($id: ID!) {
    getCovid19Positive(id: $id) {
      id
      content
      date
      createdAt
      updatedAt
    }
  }
`;
export const listCovid19Positives = /* GraphQL */ `
  query ListCovid19Positives(
    $filter: ModelCovid19PositiveFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCovid19Positives(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        date
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMyDoomsDayClockUser = /* GraphQL */ `
  query GetMyDoomsDayClockUser($id: ID!) {
    getMyDoomsDayClockUser(id: $id) {
      id
      name
      prefecture
      doomsDay
      createdAt
      updatedAt
    }
  }
`;
export const listMyDoomsDayClockUsers = /* GraphQL */ `
  query ListMyDoomsDayClockUsers(
    $filter: ModelMyDoomsDayClockUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMyDoomsDayClockUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        prefecture
        doomsDay
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
