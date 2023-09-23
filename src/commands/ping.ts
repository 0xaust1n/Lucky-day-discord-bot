import { Message, SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder().setName('ping').setDescription('Ping the bot');
export const execute = async (interaction: Message) => {
  await interaction.reply('Pong!');
};
