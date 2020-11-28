// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { InfectedData, User, Command, Battle, Curse } = initSchema(schema);

export {
  InfectedData,
  User,
  Command,
  Battle,
  Curse
};