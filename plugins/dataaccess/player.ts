import { Plugin } from '@nuxt/types';
import { API, graphqlOperation } from "aws-amplify";
import { CreatePlayerMutationVariables, GetPlayerQueryVariables } from '~/src/API';
import { JapaneseWoeid } from "~/src/enums/japanese-woeid";
import { Player } from "~/src/graphql/domain/player";
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
    getPlayer: Player
  }
}

interface FetchPlayerInput {
    id: string
}

interface FetchPlayerResult {
    player: Player
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
    // const fetchPlayerResult = await fetchPlayer({...input});

    // await DataStore.save(
    //     Player.copyOf(fetchPlayerResult.player, updated => {
    //     updated.prefecture = input.prefecture;
    // }));
}

const playerDataAccessPlugin: Plugin = (context, inject) => {
    inject('fetchPlayer', fetchPlayer)
    inject('createPlayer', createPlayer)
    inject('updatePlayer', updatePlayer)
}

export default playerDataAccessPlugin;