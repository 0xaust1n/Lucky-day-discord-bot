import { Client } from 'discord.js';
import * as fs from 'fs';

export const eventHandler = async (client: Client<boolean>) => {
  const load_dir = (dirs: string) => {
    const eventFiles = fs
      .readdirSync(`./dist/events/${dirs}`)
      .filter((file) => ['.ts', '.js'].some((fileType) => file.endsWith(fileType)));

    for (const file of eventFiles) {
      import(`../events/${dirs}/${file}`).then((event) => {
        if (event.once) {
          client.once(event.name, (...args) => event.execute(...args, client));
        } else {
          client.on(event.name, (...args) => {
            event.execute(...args, client);
          });
        }
      });
    }
  };

  ['client', 'guild'].forEach((e) => load_dir(e));
};
