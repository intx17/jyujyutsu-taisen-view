import { DataStore } from "aws-amplify";
import { UpdateBattleInput } from "~/src/API";
import { JapaneseWoeid } from "~/src/enums/japanese-woeid";
import { ParsedInfectedData } from "~/src/graphql/domain/infectedData";
import { Battle, Command, Curse, InfectedData, Player } from "~/src/models";

interface FetchInfectedDataInput {
    date: string
}

interface FetchInfectedDataResult {
    date: string
    parsedContent: ParsedInfectedData
}

interface FetchPlayerInput {
    id: string
}

interface FetchPlayerResult {
    player: Player
}

interface CreatePlayerInput {
    name: string
    maxHP: number
    woeid: JapaneseWoeid
    prefecture: string
}

interface UpdatePlayerInput {
    id: string
    prefecture: string
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
    playerID: string
}

interface FetchPlayerBattleResult {
    battle: Battle
}

interface UpdateBattleInput {
    id: string
    playerHP: number
    curseHP: number
    histories: string
}

async function fetchInfectedData(input: FetchInfectedDataInput): Promise<FetchInfectedDataResult> {
    const infectedDatas = await DataStore.query(InfectedData, data => data.date('eq', input.date));

    const infectedData = infectedDatas[0];
    return {
        date: infectedData.date,
        parsedContent: JSON.parse(JSON.stringify(infectedData))
    }
}

async function fetchPlayer(input: FetchPlayerInput): Promise<FetchPlayerResult> {
    const players = await DataStore.query(
        Player,
        data => data.id('eq', input.id)
    );
    // TODO: throw error if not exist
    return {
        player: players[0]
    }
}

async function createPlayer(input: CreatePlayerInput): Promise<void> {
    const player: Player = new Player({ ...input });
    await DataStore.save(player);
}

async function updatePlayer(input: UpdatePlayerInput): Promise<void> {
    const fetchPlayerResult = await fetchPlayer({...input});

    await DataStore.save(
        Player.copyOf(fetchPlayerResult.player, updated => {
        updated.prefecture = input.prefecture;
    }));
}

async function createCurse(input: CreateCurseInput): Promise<void> {
    const curse: Curse = new Curse({...input});
    await DataStore.save(curse);
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
    const fetchPlayerResult = await fetchPlayer({ id: input.playerID });

    const command: Command = new Command({
        ...input,
        player: fetchPlayerResult.player
    });
    await DataStore.save(command);
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
    const battles = (await DataStore.query(Battle))
        .filter(b => b.player?.id === input.playerID);

    return {
        battle: battles[0]
    }
}

async function updatePlayerBattle(input: UpdateBattleInput): Promise<void> {
    const fetchBattleResult = await fetchBattle({ id: input.id });

    await DataStore.save(
        Battle.copyOf(
            fetchBattleResult.battle,
            updated => {
                updated.playerHP = input.playerHP;
                updated.curseHP = input.curseHP;
                updated.histories = input.histories;
            }
        )
    );
}