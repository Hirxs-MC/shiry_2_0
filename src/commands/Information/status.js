const { EmbedBuilder, version, Message } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const os = require("os");
const MusicBot = require("../../structures/Client");

module.exports = {
  name: "status",
  category: "Information",
  aliases: ["stats","st"],
  description: "Displays bot status.",
  args: false,
  usage: "",
  userPerms: [],
  owner: false,
  /**
   *
   * @param {Message} message
   * @param {string[]} args
   * @param {MusicBot} client
   * @param {string} prefix
   */
  execute: async (message, args, client, prefix) => {
    const duration1 = moment
      .duration(message.client.uptime)
      .format(" d [days], h [hrs], m [mins], s [secs]");
    const about = message.client.emoji.about;
    let guildsCounts = await client.guilds.fetch();
    let userCounts = client.guilds.cache.reduce(
      (acc, guild) => acc + guild.memberCount,
      0
    );

    const embed = new EmbedBuilder()
      .setColor(client.embedColor)
      .setThumbnail(message.client.user.displayAvatarURL())
      .setFooter({text: `Requested by ${message.author.tag}`, iconURL: message.author.displayAvatarURL({ dynamic: true })})
      .setDescription(`  **Bot Information**
      
**• Name** : Delux Tunes
**• Servers** : ${guildsCounts.size}
**• Users** : ${userCounts}
**• Discord.js** : v${version}
**• Uptime** : ${duration1}

__**Developer**__
[" ~ 𝑺 𝒉 𝒖 𝒃 𝒉 . ៹ 🥀#5190](https://discord.com/users/982856398847242242)               `);
    message.reply({ embeds: [embed] });
  },
};
