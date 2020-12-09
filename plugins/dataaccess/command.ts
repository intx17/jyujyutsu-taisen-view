import { Plugin } from '@nuxt/types';
import { API, graphqlOperation } from "aws-amplify";
import { ListCommandsQueryVariables, CreateCommandMutationVariables, UpdateCommandMutationVariables, ModelCommandFilterInput } from '~/src/API';
import { ICommand } from '~/src/graphql/domain/command';
import * as queries from '~/src/graphql/queries';
import * as mutations from '~/src/graphql/mutations';

declare module 'vue/types/vue' {
  interface Vue {
    // $fetchCommand(input: FetchCommandInput): Promise<FetchCommandResult>
    // $searchPlayerSelectedCommands(input: SearchPlayerSelectedCommandsInput): Promise<SearchPlayerSelectedCommandsResult>
    $listPlayerCommands(input: ListPlayerCommandsInput): Promise<ListPlayerCommandsResult>
    $createCommand(input: CreateCommandInput): Promise<void>
    $updateCommand(input: UpdateCommandInput): Promise<void>
    // $updateSelectedCommand(input: UpdateSelectedCommandsInput): Promise<void>
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    // $fetchCommand(input: FetchCommandInput): Promise<FetchCommandResult>
    // $searchPlayerSelectedCommands(input: SearchPlayerSelectedCommandsInput): Promise<SearchPlayerSelectedCommandsResult>
    $listPlayerCommands(input: ListPlayerCommandsInput): Promise<ListPlayerCommandsResult>
    $createCommand(input: CreateCommandInput): Promise<void>
    $updateCommand(input: UpdateCommandInput): Promise<void>
    // $updateSelectedCommand(input: UpdateSelectedCommandsInput): Promise<void>
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    // $fetchCommand(input: FetchCommandInput): Promise<FetchCommandResult>
    // $searchPlayerSelectedCommands(input: SearchPlayerSelectedCommandsInput): Promise<SearchPlayerSelectedCommandsResult>
    $listPlayerCommands(input: ListPlayerCommandsInput): Promise<ListPlayerCommandsResult>
    $createCommand(input: CreateCommandInput): Promise<void>
    $updateCommand(input: UpdateCommandInput): Promise<void>
    // $updateSelectedCommand(input: UpdateSelectedCommandsInput): Promise<void>
  }
}

interface FetchCommandInput {
    id: string
}

interface FetchCommandResult {
    command: ICommand
}

interface SearchPlayerSelectedCommandsInput {
    playerID: string
}

interface SearchPlayerSelectedCommandsResult {
    commands: ICommand[]
}

interface ListPlayerCommandsInput {
    playerID: string
}

interface ListPlayerCommandsResponse {
  data: {
    listCommands: {
      items: ICommand[]
    }
  }
}

interface ListPlayerCommandsResult {
    commands: ICommand[]
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

// async function fetchCommand(input: FetchCommandInput): Promise<FetchCommandResult> {
//     const commands: Command[] = await DataStore.query(
//         Command,
//         data => data.id('eq', input.id)
//     );

//     return {
//         command: {}
//     }
// }

// async function searchPlayerSelectedCommands(input: SearchPlayerSelectedCommandsInput): Promise<SearchPlayerSelectedCommandsResult> {
//     const commands: Command[] = (await DataStore.query(
//         Command,
//         data => data.inSelectedCommandList('eq', true)
//     ))
//     .filter(c => c.player?.id === input.playerID);

//     return {
//         commands
//     }
// }

async function listPlayerCommands(input: ListPlayerCommandsInput): Promise<ListPlayerCommandsResult> {
  const filter: ModelCommandFilterInput = {
    playerID: {
      eq: input.playerID
    }
  }
  const listVar: ListCommandsQueryVariables = {
    filter
  }
  const response = await API.graphql(graphqlOperation(queries.listCommands, listVar)) as ListPlayerCommandsResponse;

  const commands = response.data.listCommands.items;

  return {
    commands
  }
}

async function createCommand(input: CreateCommandInput): Promise<void> {
    const createVar: CreateCommandMutationVariables = {
        input
    }
    await API.graphql(graphqlOperation(mutations.createCommand, createVar));
}

async function updateCommand(input: UpdateCommandInput): Promise<void> {
  const updateVar: UpdateCommandMutationVariables = {
    input
  }
  await API.graphql(graphqlOperation(mutations.updateCommand, updateVar));
}

// async function updateSelectedCommand(input: UpdateSelectedCommandsInput): Promise<void> {
//     await Promise.all(input.ids.map(id => async() => {            
//         const fetchCommandResult = await fetchCommand({ id });

//         return DataStore.save(
//             Command.copyOf(
//                 fetchCommandResult.command,
//                 updated => {
//                     updated.inSelectedCommandList = true;
//                 }));
//     }));
// }

const dataAccessPlugin: Plugin = (context, inject) => {
    // inject('fetchCommand', fetchCommand)
    // inject('searchPlayerSelectedCommands', searchPlayerSelectedCommands)
    inject('listPlayerCommands', listPlayerCommands)
    inject('createCommand', createCommand)
    inject('updateCommand', updateCommand)
    // inject('updateSelectedCommand', updateSelectedCommand)
}

export default dataAccessPlugin;