// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { InfectedData, Player, Command, Battle, Curse } = initSchema(schema);

export {
  InfectedData,
  Player,
  Command,
  Battle,
  Curse
};