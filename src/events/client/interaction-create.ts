import { Client, CommandInteraction } from 'discord.js';

const name = 'interactionCreate';
const once = false;
const execute = async (interaction: CommandInteraction, client: Client<boolean>) => {
  if (!interaction.isChatInputCommand()) return;

  const command = interaction.client.commands.get(interaction.commandName);

  if (!command) {
    console.error(`No command matching ${interaction.commandName} was found.`);
    return;
  }

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
  }
};

export { execute, name, once };
