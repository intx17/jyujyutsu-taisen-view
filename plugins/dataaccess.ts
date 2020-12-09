import { Plugin } from '@nuxt/types';
import { API, DataStore, graphqlOperation } from "aws-amplify";
import { CreateCurseMutationVariables } from '~/src/API';
import * as queries from '~/src/graphql/queries';
import * as mutations from '~/src/graphql/mutations';
import { Battle, Command, PlayerBattle } from "~/src/models";

declare module 'vue/types/vue' {
  interface Vue {
    $createCurse(input: CreateCurseInput): Promise<void>
    $fetchCommand(input: FetchCommandInput): Promise<FetchCommandResult>
    $searchPlayerSelectedCommands(input: SearchPlayerSelectedCommandsInput): Promise<SearchPlayerSelectedCommandsResult>
    $listPlayerCommands(input: ListPlayerCommandsInput): Promise<ListPlayerCommandsResult>
    $createCommand(input: CreateCommandInput): Promise<void>
    $updateCommand(input: UpdateCommandInput): Promise<void>
    $updateSelectedCommand(input: UpdateSelectedCommandsInput): Promise<void>
    $fetchBattle(input: FetchBattleInput): Promise<FetchBattleResult>
    $fetchPlayerBattle(input: FetchPlayerBattleInput): Promise<FetchPlayerBattleResult>
    $fetchPlayerBattleByPlayerId(input: FetchPlayerBattleByPlayerIDInput): Promise<FetchPlayerBattleByPlayerIDResult>
    $updatePlayerBattle(input: UpdatePlayerBattleInput): Promise<void>
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $createCurse(input: CreateCurseInput): Promise<void>
    $fetchCommand(input: FetchCommandInput): Promise<FetchCommandResult>
    $searchPlayerSelectedCommands(input: SearchPlayerSelectedCommandsInput): Promise<SearchPlayerSelectedCommandsResult>
    $listPlayerCommands(input: ListPlayerCommandsInput): Promise<ListPlayerCommandsResult>
    $createCommand(input: CreateCommandInput): Promise<void>
    $updateCommand(input: UpdateCommandInput): Promise<void>
    $updateSelectedCommand(input: UpdateSelectedCommandsInput): Promise<void>
    $fetchBattle(input: FetchBattleInput): Promise<FetchBattleResult>
    $fetchPlayerBattle(input: FetchPlayerBattleInput): Promise<FetchPlayerBattleResult>
    $fetchPlayerBattleByPlayerId(input: FetchPlayerBattleByPlayerIDInput): Promise<FetchPlayerBattleByPlayerIDResult>
    $updatePlayerBattle(input: UpdatePlayerBattleInput): Promise<void>
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $createCurse(input: CreateCurseInput): Promise<void>
    $fetchCommand(input: FetchCommandInput): Promise<FetchCommandResult>
    $searchPlayerSelectedCommands(input: SearchPlayerSelectedCommandsInput): Promise<SearchPlayerSelectedCommandsResult>
    $listPlayerCommands(input: ListPlayerCommandsInput): Promise<ListPlayerCommandsResult>
    $createCommand(input: CreateCommandInput): Promise<void>
    $updateCommand(input: UpdateCommandInput): Promise<void>
    $updateSelectedCommand(input: UpdateSelectedCommandsInput): Promise<void>
    $fetchBattle(input: FetchBattleInput): Promise<FetchBattleResult>
    $fetchPlayerBattle(input: FetchPlayerBattleInput): Promise<FetchPlayerBattleResult>
    $fetchPlayerBattleByPlayerId(input: FetchPlayerBattleByPlayerIDInput): Promise<FetchPlayerBattleByPlayerIDResult>
    $updatePlayerBattle(input: UpdatePlayerBattleInput): Promise<void>
  }
}

interface CreateCurseInput {
    name: string
    negative: number
    maxHP: number
    attack: number
    hitRate: number
    imgSrc: string
}

interface FetchCommandInput {
    id: string
}

interface FetchCommandResult {
    command: Command
}

interface SearchPlayerSelectedCommandsInput {
    playerID: string
}

interface SearchPlayerSelectedCommandsResult {
    commands: Command[]
}

interface ListPlayerCommandsInput {
    playerID: string
}

interface ListPlayerCommandsResult {
    commands: Command[]
}

interface CreateCommandInput {
    name: string
    description: string
    attack: number
    criticalRate: number
    isOutdoor: boolean
    inSelectedCommandList: boolean
    playerID: string
}

interface UpdateCommandInput {
    id: string
    name: string
    description: string
    attack: number
    criticalRate: number
    isOutdoor: boolean
    inSelectedCommandList: boolean
}

interface UpdateSelectedCommandsInput {
    ids: string[]
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

async function createCurse(input: CreateCurseInput): Promise<void> {
    var mutationVar: CreateCurseMutationVariables = {
      input
    }
    await API.graphql(graphqlOperation(createCurse, mutationVar));
}

async function fetchCommand(input: FetchCommandInput): Promise<FetchCommandResult> {
    const commands: Command[] = await DataStore.query(
        Command,
        data => data.id('eq', input.id)
    );

    return {
        command: commands[0]
    }
}

async function searchPlayerSelectedCommands(input: SearchPlayerSelectedCommandsInput): Promise<SearchPlayerSelectedCommandsResult> {
    const commands: Command[] = (await DataStore.query(
        Command,
        data => data.inSelectedCommandList('eq', true)
    ))
    .filter(c => c.player?.id === input.playerID);

    return {
        commands
    }
}

async function listPlayerCommands(input: ListPlayerCommandsInput): Promise<ListPlayerCommandsResult> {
    const commands: Command[] = (await DataStore.query(Command))
        .filter(c => c.player?.id === input.playerID);

    return {
        commands
    }
}

async function createCommand(input: CreateCommandInput): Promise<void> {
    // const fetchPlayerResult = await fetchPlayer({ id: input.playerID });

    // const command: Command = new Command({
    //     ...input,
    //     player: fetchPlayerResult.player
    // });
    // await DataStore.save(command);
}

async function updateCommand(input: UpdateCommandInput): Promise<void> {
    const fetchCommandResult = await fetchCommand({ id: input.id });

    await DataStore.save(
        Command.copyOf(
            fetchCommandResult.command,
            updated => {
                updated.name = input.name;
                updated.description = input.description;
                updated.attack = input.attack;
                updated.criticalRate = input.criticalRate;
                updated.isOutdoor = input.isOutdoor;
                updated.inSelectedCommandList = input.inSelectedCommandList;
            }));
}

async function updateSelectedCommand(input: UpdateSelectedCommandsInput): Promise<void> {
    await Promise.all(input.ids.map(id => async() => {            
        const fetchCommandResult = await fetchCommand({ id });

        return DataStore.save(
            Command.copyOf(
                fetchCommandResult.command,
                updated => {
                    updated.inSelectedCommandList = true;
                }));
    }));
}

async function fetchBattle(input: FetchBattleInput): Promise<FetchBattleResult> {
    const battles = await DataStore.query(
        Battle,
        data => data.id('eq', input.id)
    );

    return {
        battle: battles[0]
    }
}

async function fetchPlayerBattle(input: FetchPlayerBattleInput): Promise<FetchPlayerBattleResult> {
    const battles = (await DataStore.query(PlayerBattle))
        .filter(b => b.id === input.id);

    return {
        battle: battles[0]
    }
}

async function fetchPlayerBattleByPlayerId(input: FetchPlayerBattleByPlayerIDInput): Promise<FetchPlayerBattleByPlayerIDResult> {
    const battles = (await DataStore.query(PlayerBattle))
        .filter(b => b.player?.id === input.playerID);

    return {
        battle: battles[0]
    }
}

async function updatePlayerBattle(input: UpdatePlayerBattleInput): Promise<void> {
    const fetchBattleResult = await fetchPlayerBattle({ id: input.id });

    if (!fetchBattleResult) {
        return;
    }

    await DataStore.save(
        PlayerBattle.copyOf(
            fetchBattleResult.battle,
            updated => {
                updated.playerHP = input.playerHP;
                updated.curseHP = input.curseHP;
                updated.histories = input.histories;
            }
        )
    );
}

const dataAccessPlugin: Plugin = (context, inject) => {
    inject('createCurse', createCurse)
    inject('fetchCommand', fetchCommand)
    inject('searchPlayerSelectedCommands', searchPlayerSelectedCommands)
    inject('listPlayerCommands', listPlayerCommands)
    inject('createCommand', createCommand)
    inject('updateCommand', updateCommand)
    inject('updateSelectedCommand', updateSelectedCommand)
    inject('fetchBattle', fetchBattle)
    inject('fetchPlayerBattle', fetchPlayerBattle)
    inject('fetchPlayerBattleByPlayerId', fetchPlayerBattleByPlayerId)
    inject('updatePlayerBattle', updatePlayerBattle)
}

export default dataAccessPlugin;