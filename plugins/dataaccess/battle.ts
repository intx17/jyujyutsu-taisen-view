/* eslint-disable no-unused-vars */
import { API, graphqlOperation } from 'aws-amplify'
import { Plugin } from '@nuxt/types'
import { ModelBattleFilterInput, ListBattlesQueryVariables } from '~/src/API'
import { IBattle } from '~/src/graphql/domain/battle'

import * as queries from '~/src/graphql/queries'

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

declare module 'vue/types/vue' {
  interface Vue {
    $fetchInProgressBattle(input: FetchInProgressBattleInput): Promise<FetchInProgressBattleResult>
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $fetchInProgressBattle(input: FetchInProgressBattleInput): Promise<FetchInProgressBattleResult>
  }
}

declare module 'vuex/types/index' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $fetchInProgressBattle(input: FetchInProgressBattleInput): Promise<FetchInProgressBattleResult>
  }
}

const battleDataAccessPlugin: Plugin = (_, inject) => {
  // inject('fetchCommand', fetchCommand)
  inject('fetchInProgressBattle', fetchInProgressBattle)
}

export default battleDataAccessPlugin
