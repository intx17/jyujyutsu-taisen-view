/* eslint-disable no-unused-vars */
import { Plugin } from '@nuxt/types'
import { API, graphqlOperation } from 'aws-amplify'
import { ListCommandsQueryVariables, CreateCommandMutationVariables, UpdateCommandMutationVariables, ModelCommandFilterInput, CreateCommandInput, UpdateCommandInput } from '~/src/API'
import { ICommand } from '~/src/graphql/domain/command'
import * as queries from '~/src/graphql/queries'
import * as mutations from '~/src/graphql/mutations'

// interface FetchCommandInput {
//     id: string
// }

// interface FetchCommandResult {
//     command: ICommand
// }

interface ListPlayerSelectedCommandsInput {
    playerID: string
}

interface ListPlayerSelectedCommandsResult {
    commands: ICommand[]
}

interface ListPlayerCommandsInput {
    playerID: string
}

interface ListCommandsResponse {
  data: {
    listCommands: {
      items: ICommand[]
    }
  }
}

interface ListPlayerCommandsResult {
    commands: ICommand[]
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

async function listPlayerSelectedCommands (input: ListPlayerSelectedCommandsInput): Promise<ListPlayerSelectedCommandsResult> {
  const filter: ModelCommandFilterInput = {
    playerID: {
      eq: input.playerID
    },
    inSelectedCommandList: {
      eq: true
    }
  }
  const listVar: ListCommandsQueryVariables = {
    filter
  }
  const response = await API.graphql(graphqlOperation(queries.listCommands, listVar)) as ListCommandsResponse

  const commands = response.data.listCommands.items

  return {
    commands
  }
}

async function listPlayerCommands (input: ListPlayerCommandsInput): Promise<ListPlayerCommandsResult> {
  const filter: ModelCommandFilterInput = {
    playerID: {
      eq: input.playerID
    }
  }
  const listVar: ListCommandsQueryVariables = {
    filter
  }
  const response = await API.graphql(graphqlOperation(queries.listCommands, listVar)) as ListCommandsResponse

  const commands = response.data.listCommands.items

  return {
    commands
  }
}

async function createCommand (input: CreateCommandInput): Promise<void> {
  const createVar: CreateCommandMutationVariables = {
    input
  }
  await API.graphql(graphqlOperation(mutations.createCommand, createVar))
}

async function updateCommand (input: UpdateCommandInput): Promise<void> {
  const updateVar: UpdateCommandMutationVariables = {
    input
  }
  await API.graphql(graphqlOperation(mutations.updateCommand, updateVar))
}

async function updateSelectedCommand (input: UpdateSelectedCommandsInput): Promise<void> {
  for (const id of input.ids) {
    if (!id) {
      continue
    }

    const updateVar: UpdateCommandMutationVariables = {
      input: {
        id,
        inSelectedCommandList: true
      }
    }

    // Promise Allしたい
    await API.graphql(graphqlOperation(mutations.updateCommand, updateVar))
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    // $fetchCommand(input: FetchCommandInput): Promise<FetchCommandResult>
    // $listPlayerSelectedCommands(input: ListPlayerSelectedCommandsInput): Promise<ListPlayerSelectedCommandsResult>
    $listPlayerCommands(input: ListPlayerCommandsInput): Promise<ListPlayerCommandsResult>
    $createCommand(input: CreateCommandInput): Promise<void>
    $updateCommand(input: UpdateCommandInput): Promise<void>
    $updateSelectedCommand(input: UpdateSelectedCommandsInput): Promise<void>
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    // $fetchCommand(input: FetchCommandInput): Promise<FetchCommandResult>
    $listPlayerSelectedCommands(input: ListPlayerSelectedCommandsInput): Promise<ListPlayerSelectedCommandsResult>
    $listPlayerCommands(input: ListPlayerCommandsInput): Promise<ListPlayerCommandsResult>
    $createCommand(input: CreateCommandInput): Promise<void>
    $updateCommand(input: UpdateCommandInput): Promise<void>
    $updateSelectedCommand(input: UpdateSelectedCommandsInput): Promise<void>
  }
}

declare module 'vuex/types/index' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    // $fetchCommand(input: FetchCommandInput): Promise<FetchCommandResult>
    $listPlayerSelectedCommands(input: ListPlayerSelectedCommandsInput): Promise<ListPlayerSelectedCommandsResult>
    $listPlayerCommands(input: ListPlayerCommandsInput): Promise<ListPlayerCommandsResult>
    $createCommand(input: CreateCommandInput): Promise<void>
    $updateCommand(input: UpdateCommandInput): Promise<void>
    $updateSelectedCommand(input: UpdateSelectedCommandsInput): Promise<void>
  }
}

const commandDataAccessPlugin: Plugin = (_, inject) => {
  // inject('fetchCommand', fetchCommand)
  inject('listPlayerSelectedCommands', listPlayerSelectedCommands)
  inject('listPlayerCommands', listPlayerCommands)
  inject('createCommand', createCommand)
  inject('updateCommand', updateCommand)
  inject('updateSelectedCommand', updateSelectedCommand)
}

export default commandDataAccessPlugin
