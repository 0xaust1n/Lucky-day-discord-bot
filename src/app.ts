import { Client, Collection, GatewayIntentBits } from 'discord.js';
import 'dotenv/config';
import { commandHandler } from './handlers/command-handler';
import { eventHandler } from './handlers/event-handler';
// init intents
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildPresences,
  ],
});
// init commands collection from command folder
client.commands = new Collection();
client.events = new Collection();
// init handler
commandHandler(client);
eventHandler(client);
// discord token
const token = process.env.TOKEN;
client.login(token);
