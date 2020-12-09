/* eslint-disable @typescript-eslint/no-unused-vars */
import { Plugin } from '@nuxt/types'
import { API, graphqlOperation } from 'aws-amplify'
import { CreatePlayerInput, CreatePlayerMutationVariables, GetPlayerQueryVariables, UpdatePlayerInput, UpdatePlayerMutationVariables } from '~/src/API'
import { IPlayer } from '~/src/graphql/domain/player'
import * as queries from '~/src/graphql/queries'
import * as mutations from '~/src/graphql/mutations'

interface GetPlayerResponse {
  data: {
    getPlayer: IPlayer
  }
}

interface FetchPlayerInput {
    id: string
}

interface FetchPlayerResult {
    player: IPlayer
}

async function fetchPlayer (input: FetchPlayerInput): Promise<FetchPlayerResult> {
  const getPlayerVar: GetPlayerQueryVariables = {
    id: input.id
  }

  const response = await API.graphql(graphqlOperation(queries.getPlayer, getPlayerVar)) as GetPlayerResponse
  const player = response.data.getPlayer

  return {
    player
  }
}

async function createPlayer (input: CreatePlayerInput): Promise<void> {
  const createPlayerVar: CreatePlayerMutationVariables = {
    input
  }
  await API.graphql(graphqlOperation(mutations.createPlayer, createPlayerVar))
}

async function updatePlayer (input: UpdatePlayerInput): Promise<void> {
  const updatePlayerVar: UpdatePlayerMutationVariables = {
    input
  }
  await API.graphql(graphqlOperation(mutations.updatePlayer, updatePlayerVar))
}

const playerDataAccessPlugin: Plugin = (_, inject) => {
  inject('fetchPlayer', fetchPlayer)
  inject('createPlayer', createPlayer)
  inject('updatePlayer', updatePlayer)
}

declare module 'vue/types/vue' {
  interface Vue {
    $fetchPlayer(input: FetchPlayerInput): Promise<FetchPlayerResult>
    $createPlayer(input: CreatePlayerInput): Promise<void>
    $updatePlayer(input: UpdatePlayerInput): Promise<void>
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $fetchPlayer(input: FetchPlayerInput): Promise<FetchPlayerResult>
    $createPlayer(input: CreatePlayerInput): Promise<void>
    $updatePlayer(input: UpdatePlayerInput): Promise<void>
  }
}
declare module 'vuex/types/index' {
  // eslint-disable-next-line no-unused-vars
  interface Store<S> {
    $fetchPlayer(input: FetchPlayerInput): Promise<FetchPlayerResult>
    $createPlayer(input: CreatePlayerInput): Promise<void>
    $updatePlayer(input: UpdatePlayerInput): Promise<void>
  }
}

export default playerDataAccessPlugin
