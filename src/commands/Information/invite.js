const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = {
  name: "invite",
  category: "Information",
  aliases: ["addme"],
  description: "Get the bot's invite link.",
  args: false,
  usage: "",
  userPerms: [],
  owner: false,
  execute: async (message, args, client, prefix) => {

    const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setLabel("Invite")
          .setStyle(ButtonStyle.Link)
          .setURL(`https://discord.com/api/oauth2/authorize?client_id=1078594260506513408&permissions=8&scope=bot%20applications.commands`),
        
        new ButtonBuilder()
          .setLabel("Support")
          .setStyle(ButtonStyle.Link)
          .setURL("https://discord.gg/8ggjwjahhx")
      );

    const mainPage = new EmbedBuilder()
      .setAuthor({ name: 'Delux Tunes', iconURL: 'https://media.discordapp.net/attachments/1065353571090055302/1067471246121500802/f01ef3a2be8442bac0f3f836b6403112.webp' })
      .setThumbnail('https://media.discordapp.net/attachments/1065353571090055302/1067471246121500802/f01ef3a2be8442bac0f3f836b6403112.webp')
      .setColor(0x303236)
      .setTimestamp()
      .addFields([{ name: 'Invite Delux Tunes', value: '**[Delux](https://discord.com/api/oauth2/authorize?client_id=1078594260506513408&permissions=8&scope=bot%20applications.commands)**', inline: true },
    { name: 'Need Help', value: `**[Support Server](https://discord.gg/8ggjwjahhx)**`, inline: true },
                  ]);
    message.reply({ embeds: [mainPage], components: [row] })
  }
}
