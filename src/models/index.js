// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { InfectedData, Player, Command, PlayerBattle, Curse, Battle } = initSchema(schema);

export {
  InfectedData,
  Player,
  Command,
  PlayerBattle,
  Curse,
  Battle
};