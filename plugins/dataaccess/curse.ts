/* eslint-disable no-unused-vars */
import { Plugin } from '@nuxt/types'
import { API, graphqlOperation } from 'aws-amplify'
import { CreateCurseInput, CreateCurseMutationVariables, GetCurseQueryVariables } from '~/src/API'
import * as queries from '~/src/graphql/queries'
import * as mutations from '~/src/graphql/mutations'
import { ICurse } from '~/src/graphql/domain/curse'

interface GetCurseResponse {
  data: {
    getCurse: ICurse
  }
}

interface FetchCurseInput {
  id: string
}

interface FetchCurseResult {
  curse: ICurse
}

async function fetchCurse (input: FetchCurseInput): Promise<FetchCurseResult> {
  const fetchVar: GetCurseQueryVariables = input
  const response = await API.graphql(graphqlOperation(queries.getCurse, fetchVar)) as GetCurseResponse

  return {
    curse: response.data.getCurse
  }
}

async function createCurse (input: CreateCurseInput): Promise<void> {
  const mutationVar: CreateCurseMutationVariables = {
    input
  }
  await API.graphql(graphqlOperation(mutations.createCurse, mutationVar))
}

declare module 'vue/types/vue' {
  interface Vue {
    $fetchCurse(input: FetchCurseInput): Promise<FetchCurseResult>
    $createCurse(input: CreateCurseInput): Promise<void>
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $fetchCurse(input: FetchCurseInput): Promise<FetchCurseResult>
    $createCurse(input: CreateCurseInput): Promise<void>
  }
}

declare module 'vuex/types/index' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $fetchCurse(input: FetchCurseInput): Promise<FetchCurseResult>
    $createCurse(input: CreateCurseInput): Promise<void>
  }
}

const curseDataAccessPlugin: Plugin = (_, inject) => {
  inject('fetchCurse', fetchCurse)
  inject('createCurse', createCurse)
}

export default curseDataAccessPlugin
