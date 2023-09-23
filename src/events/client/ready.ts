import { Client } from 'discord.js';

const name = 'ready';
const once = true;
const execute = (client: Client<boolean>) => {
  console.log(`Logged in as ${client.user.username}!`);
};

export { execute, name, once };
