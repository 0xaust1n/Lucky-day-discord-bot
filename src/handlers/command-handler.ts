import { Client } from 'discord.js';
import * as fs from 'fs';

export const commandHandler = (client: Client<boolean>) => {
  const commandFiles = fs
    .readdirSync('./dist/commands')
    .filter((file) => ['.ts', '.js'].some((fileType) => file.endsWith(fileType)));
  for (const file of commandFiles) {
    import(`../commands/${file}`).then((commandModule) => {
      if ('data' in commandModule && 'execute' in commandModule) {
        client.commands.set(commandModule.data.name, commandModule);
      } else {
        console.log(`[WARNING] The command at ./src/command is missing a required "data" or "execute" property.`);
      }
    });
  }
};
