/* eslint-disable no-unused-vars */
import { API, graphqlOperation } from 'aws-amplify'
import { Plugin } from '@nuxt/types'
import { ModelBattleFilterInput, ListBattlesQueryVariables, UpdateBattleInput, UpdateBattleMutationVariables } from '~/src/API'
import { IBattle } from '~/src/graphql/domain/battle'

import * as queries from '~/src/graphql/queries'
import * as mutations from '~/src/graphql/mutations'
interface FetchNewBattleInput {
    playerID: string
}

interface FetchNewBattleResult {
    battle: IBattle | null
}

interface FetchInProgressBattleInput {
    playerID: string
}

interface FetchInProgressBattleResult {
    battle: IBattle | null
}

interface ListBattlessResponse {
  data: {
    listBattles: {
      items: IBattle[]
    }
  }
}

async function fetchNewBattle (input: FetchInProgressBattleInput): Promise<FetchInProgressBattleResult> {
  const filter: ModelBattleFilterInput = {
    playerID: {
      eq: input.playerID
    },
    inProgress: {
      eq: false
    },
    playerHP: {
      gt: 0
    },
    curseHP: {
      gt: 0
    }
  }
  const listVar: ListBattlesQueryVariables = {
    filter
  }
  const response = await API.graphql(graphqlOperation(queries.listBattles, listVar)) as ListBattlessResponse

  const battle = response.data.listBattles.items[0] ?? null

  return {
    battle
  }
}

async function fetchInProgressBattle (input: FetchInProgressBattleInput): Promise<FetchInProgressBattleResult> {
  const filter: ModelBattleFilterInput = {
    playerID: {
      eq: input.playerID
    },
    inProgress: {
      eq: true
    }
  }
  const listVar: ListBattlesQueryVariables = {
    filter
  }
  const response = await API.graphql(graphqlOperation(queries.listBattles, listVar)) as ListBattlessResponse

  const battle = response.data.listBattles.items[0] ?? null

  return {
    battle
  }
}

async function updateBattle (input: UpdateBattleInput): Promise<void> {
  const updateVar: UpdateBattleMutationVariables = {
    input
  }
  await API.graphql(graphqlOperation(mutations.updateBattle, updateVar))
}

declare module 'vue/types/vue' {
  interface Vue {
    $fetchNewBattle(input: FetchNewBattleInput): Promise<FetchNewBattleResult>
    $fetchInProgressBattle(input: FetchInProgressBattleInput): Promise<FetchInProgressBattleResult>
    $updateBattle(input: UpdateBattleInput): Promise<void>
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $fetchNewBattle(input: FetchNewBattleInput): Promise<FetchNewBattleResult>
    $fetchInProgressBattle(input: FetchInProgressBattleInput): Promise<FetchInProgressBattleResult>
    $updateBattle(input: UpdateBattleInput): Promise<void>
  }
}

declare module 'vuex/types/index' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $fetchNewBattle(input: FetchNewBattleInput): Promise<FetchNewBattleResult>
    $fetchInProgressBattle(input: FetchInProgressBattleInput): Promise<FetchInProgressBattleResult>
    $updateBattle(input: UpdateBattleInput): Promise<void>
  }
}

const battleDataAccessPlugin: Plugin = (_, inject) => {
  inject('fetchNewBattle', fetchNewBattle)
  inject('fetchInProgressBattle', fetchInProgressBattle)
  inject('updateBattle', updateBattle)
}

export default battleDataAccessPlugin
