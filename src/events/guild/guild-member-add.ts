import { ChannelType, Client, EmbedBuilder, GuildMember } from 'discord.js';
import 'dotenv/config';
// alert user when receive role
const channelId: string = process.env.ALERT_JOIN_CHANNEL || null;
const name = 'guildMemberAdd';
const once = false;
const execute = async (joinMember: GuildMember, client: Client<boolean>) => {
  if (!!channelId) {
    const channel = client.channels.cache.get(channelId);
    if (channel.type === ChannelType.GuildText) {
      const resultEmbed = new EmbedBuilder()
        .setColor(0x0099ff)
        .setAuthor({ name: joinMember.displayName, iconURL: joinMember.displayAvatarURL() })
        .setThumbnail(joinMember.displayAvatarURL())
        .addFields({
          name: '--加入通知--',
          value: `<@${joinMember.id}> **加入了** :)\r
          請至<#1122160395361194054>報名! \r
          如有其他問題私訊: \r
          - <@486147901802938370> \r- <@270118954805100545> \r `,
        })

        .setTimestamp();

      channel.send({ embeds: [resultEmbed] });
    }
  }
};

export { execute, name, once };
