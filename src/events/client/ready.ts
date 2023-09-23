import { Client } from 'discord.js';

const name = 'ready';
const once = true;
const execute = (client: Client<boolean>) => {
  console.log(`機器人已經開啟！名字為:${client.user.username}!`);
};

export { execute, name, once };
