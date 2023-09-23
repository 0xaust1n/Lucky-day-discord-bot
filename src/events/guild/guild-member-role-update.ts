import { ChannelType, Client, EmbedBuilder, GuildMember } from 'discord.js';
import 'dotenv/config';
// alert user when receive role
const roleId: string = process.env.ALERT_ROLE || null;
const channelId: string = process.env.ALERT_CHANNEL || null;
const name = 'guildMemberUpdate';
const once = false;
const execute = async (oldMember: GuildMember, newMember: GuildMember, client: Client<boolean>) => {
  if (!!roleId && !!channelId) {
    if (newMember.roles.cache.some((r) => r.id === roleId)) {
      const channel = client.channels.cache.get(channelId);
      if (channel.type === ChannelType.GuildText) {
        const resultEmbed = new EmbedBuilder()
          .setColor(0x0099ff)
          .setAuthor({ name: newMember.displayName, iconURL: newMember.displayAvatarURL() })
          .setThumbnail(newMember.displayAvatarURL())
          .addFields({
            name: '--入會通知--',
            value: `我們熱烈歡迎 \`${newMember.displayName}\` 加入公會！！`,
          })
          .setTimestamp();

        channel.send({ embeds: [resultEmbed] });
      }
    }
  }
};

export { execute, name, once };
