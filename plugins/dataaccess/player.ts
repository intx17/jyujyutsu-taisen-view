import { Plugin } from '@nuxt/types';
import { API, graphqlOperation } from "aws-amplify";
import { CreatePlayerMutationVariables, GetPlayerQueryVariables, UpdatePlayerMutationVariables } from '~/src/API';
import { JapaneseWoeid } from "~/src/enums/japanese-woeid";
import { IPlayer } from "~/src/graphql/domain/player";
import * as queries from '~/src/graphql/queries';
import * as mutations from '~/src/graphql/mutations';

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
  interface Store<S> {
    $fetchPlayer(input: FetchPlayerInput): Promise<FetchPlayerResult>
    $createPlayer(input: CreatePlayerInput): Promise<void>
    $updatePlayer(input: UpdatePlayerInput): Promise<void>
  }
}

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

interface CreatePlayerInput {
    id: string
    name: string
    maxHP: number
    woeid: JapaneseWoeid
    prefecture: string
}

interface UpdatePlayerInput {
    id: string
    prefecture: string
}

async function fetchPlayer(input: FetchPlayerInput): Promise<FetchPlayerResult> {
    const getPlayerVar: GetPlayerQueryVariables = {
        id: input.id
    };

    const response = await API.graphql(graphqlOperation(queries.getPlayer, getPlayerVar)) as GetPlayerResponse;
    const player = response.data.getPlayer;
    
    return {
        player
    }
}

async function createPlayer(input: CreatePlayerInput): Promise<void> {
    const createPlayerVar: CreatePlayerMutationVariables = {
        input
    }
    await API.graphql(graphqlOperation(mutations.createPlayer, createPlayerVar));
}

async function updatePlayer(input: UpdatePlayerInput): Promise<void> {
   const updatePlayerVar: UpdatePlayerMutationVariables = {
    input
  }
    await API.graphql(graphqlOperation(mutations.updatePlayer, updatePlayerVar));
}

const playerDataAccessPlugin: Plugin = (context, inject) => {
    inject('fetchPlayer', fetchPlayer)
    inject('createPlayer', createPlayer)
    inject('updatePlayer', updatePlayer)
}

export default playerDataAccessPlugin;