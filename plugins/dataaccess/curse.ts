/* eslint-disable no-unused-vars */
import { Plugin } from '@nuxt/types'
import { API, graphqlOperation } from 'aws-amplify'
import { CreateCurseInput, CreateCurseMutationVariables } from '~/src/API'
import * as mutations from '~/src/graphql/mutations'

async function createCurse (input: CreateCurseInput): Promise<void> {
  const mutationVar: CreateCurseMutationVariables = {
    input
  }
  await API.graphql(graphqlOperation(mutations.createCurse, mutationVar))
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $createCurse(input: CreateCurseInput): Promise<void>
  }
}

declare module 'vuex/types/index' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $createCurse(input: CreateCurseInput): Promise<void>
  }
}

const curseDataAccessPlugin: Plugin = (_, inject) => {
  inject('createCurse', createCurse)
}

export default curseDataAccessPlugin
