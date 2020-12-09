/* eslint-disable no-unused-vars */
import { Plugin } from '@nuxt/types'
import { API, DataStore, graphqlOperation } from 'aws-amplify'
import { CreateCurseMutationVariables } from '~/src/API'
import { Battle, PlayerBattle } from '~/src/models'

interface CreateCurseInput {
    name: string
    negative: number
    maxHP: number
    attack: number
    hitRate: number
    imgSrc: string
}

interface FetchBattleInput {
    id: string
}
interface FetchBattleResult {
    battle: Battle
}

interface FetchPlayerBattleInput {
    id: string
}

interface FetchPlayerBattleResult {
    battle: PlayerBattle
}

interface FetchPlayerBattleByPlayerIDInput {
    playerID: string
}

interface FetchPlayerBattleByPlayerIDResult {
    battle: PlayerBattle
}

interface UpdatePlayerBattleInput {
    id: string
    playerHP: number
    curseHP: number
    histories: string
}

async function createCurse (input: CreateCurseInput): Promise<void> {
  const mutationVar: CreateCurseMutationVariables = {
    input
  }
  await API.graphql(graphqlOperation(createCurse, mutationVar))
}

async function fetchBattle (input: FetchBattleInput): Promise<FetchBattleResult> {
  const battles = await DataStore.query(
    Battle,
    data => data.id('eq', input.id)
  )

  return {
    battle: battles[0]
  }
}

async function fetchPlayerBattle (input: FetchPlayerBattleInput): Promise<FetchPlayerBattleResult> {
  const battles = (await DataStore.query(PlayerBattle))
    .filter(b => b.id === input.id)

  return {
    battle: battles[0]
  }
}

async function fetchPlayerBattleByPlayerId (input: FetchPlayerBattleByPlayerIDInput): Promise<FetchPlayerBattleByPlayerIDResult> {
  const battles = (await DataStore.query(PlayerBattle))
    .filter(b => b.player?.id === input.playerID)

  return {
    battle: battles[0]
  }
}

async function updatePlayerBattle (input: UpdatePlayerBattleInput): Promise<void> {
  const fetchBattleResult = await fetchPlayerBattle({ id: input.id })

  if (!fetchBattleResult) {
    return
  }

  await DataStore.save(
    PlayerBattle.copyOf(
      fetchBattleResult.battle,
      (updated) => {
        updated.playerHP = input.playerHP
        updated.curseHP = input.curseHP
        updated.histories = input.histories
      }
    )
  )
}

declare module 'vue/types/vue' {
  interface Vue {
    $createCurse(input: CreateCurseInput): Promise<void>
    $fetchBattle(input: FetchBattleInput): Promise<FetchBattleResult>
    $fetchPlayerBattle(input: FetchPlayerBattleInput): Promise<FetchPlayerBattleResult>
    $fetchPlayerBattleByPlayerId(input: FetchPlayerBattleByPlayerIDInput): Promise<FetchPlayerBattleByPlayerIDResult>
    $updatePlayerBattle(input: UpdatePlayerBattleInput): Promise<void>
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $createCurse(input: CreateCurseInput): Promise<void>
    $fetchBattle(input: FetchBattleInput): Promise<FetchBattleResult>
    $fetchPlayerBattle(input: FetchPlayerBattleInput): Promise<FetchPlayerBattleResult>
    $fetchPlayerBattleByPlayerId(input: FetchPlayerBattleByPlayerIDInput): Promise<FetchPlayerBattleByPlayerIDResult>
    $updatePlayerBattle(input: UpdatePlayerBattleInput): Promise<void>
  }
}

declare module 'vuex/types/index' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $createCurse(input: CreateCurseInput): Promise<void>
    $fetchBattle(input: FetchBattleInput): Promise<FetchBattleResult>
    $fetchPlayerBattle(input: FetchPlayerBattleInput): Promise<FetchPlayerBattleResult>
    $fetchPlayerBattleByPlayerId(input: FetchPlayerBattleByPlayerIDInput): Promise<FetchPlayerBattleByPlayerIDResult>
    $updatePlayerBattle(input: UpdatePlayerBattleInput): Promise<void>
  }
}

const dataAccessPlugin: Plugin = (_, inject) => {
  inject('createCurse', createCurse)
  inject('fetchBattle', fetchBattle)
  inject('fetchPlayerBattle', fetchPlayerBattle)
  inject('fetchPlayerBattleByPlayerId', fetchPlayerBattleByPlayerId)
  inject('updatePlayerBattle', updatePlayerBattle)
}

export default dataAccessPlugin
