import { Plugin } from '@nuxt/types';
import { API, graphqlOperation } from "aws-amplify";
import { GetInfectedDataQueryVariables } from '~/src/API';
import { IInfectedData } from "~/src/graphql/domain/infectedData";
import * as queries from '~/src/graphql/queries';

interface FetchInfectedDataInput {
    date: string
}

interface GetInfectedDataResponse {
  data: {
    getInfectedData: IInfectedData
  }
}

interface FetchInfectedDataResult {
  infectedData: IInfectedData
}

declare module 'vue/types/vue' {
  interface Vue {
    $fetchInfectedData(input: FetchInfectedDataInput): Promise<FetchInfectedDataResult>
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $fetchInfectedData(input: FetchInfectedDataInput): Promise<FetchInfectedDataResult>
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $fetchInfectedData(input: FetchInfectedDataInput): Promise<FetchInfectedDataResult>
  }
}

async function fetchInfectedData(input: FetchInfectedDataInput): Promise<FetchInfectedDataResult> {
     const variables: GetInfectedDataQueryVariables = input;

    const response: GetInfectedDataResponse = await API.graphql(
    graphqlOperation(
        queries.getInfectedData,
        variables,
    )) as GetInfectedDataResponse;

    const infectedData = response.data.getInfectedData;

    return {
      infectedData
    }
}

const infectedDataDataAccessPlugin: Plugin = (context, inject) => {
    inject('fetchInfectedData', fetchInfectedData)
}

export default infectedDataDataAccessPlugin;