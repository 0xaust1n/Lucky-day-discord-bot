import { ChannelType, Client, EmbedBuilder, GuildMember } from 'discord.js';
import 'dotenv/config';
// alert user when receive role
const roleId: string = process.env.ALERT_ROLE || null;
const channelId: string = process.env.ALERT_CHANNEL || null;
const name = 'guildMemberUpdate';
const once = false;
const execute = async (oldMember: GuildMember, newMember: GuildMember, client: Client<boolean>) => {
  if (!!roleId && !!channelId) {
    if (newMember.roles.cache.has(roleId) && !oldMember.roles.cache.has(roleId)) {
      const channel = client.channels.cache.get(channelId);
      if (channel.type === ChannelType.GuildText) {
        const resultEmbed = new EmbedBuilder()
          .setColor(0x0099ff)
          .setAuthor({
            name: 'Revival Kyuubi',
            iconURL:
              'https://media.discordapp.net/attachments/1103170701634043996/1155255407766425721/image.png?width=424&height=402',
          })
          .setThumbnail(newMember.displayAvatarURL())
          .addFields({
            name: '--入會通知--',
            value: `我們熱烈歡迎 <@${newMember.id}> 加入 Revival Kyuubi 公會！！`,
          })
          .setTimestamp();

        channel.send({ embeds: [resultEmbed] });
      }
    }
  }
};

export { execute, name, once };
