const { EmbedBuilder, CommandInteraction, ButtonStyle, Client, ButtonBuilder, ActionRowBuilder } = require("discord.js")

module.exports = {
    name: "invite",
    description: "Get the bot's invite link.",

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */

    run: async (client, interaction) => {
        await interaction.deferReply({
            ephemeral: false
        });

           
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
            .setAuthor({ name: 'Delux Tunes', iconURL: 'https://media.discordapp.net/attachments/1065353571090055302/1067471246121500802/f01ef3a2be8442bac0f3f836b6403112.webp'})
            .setThumbnail('https://media.discordapp.net/attachments/1065353571090055302/1067471246121500802/f01ef3a2be8442bac0f3f836b6403112.webp')
            .setColor(0x303236)
             .addFields([{ name: 'invite Dekux Tunes', value: `[Delux](https://discord.com/api/oauth2/authorize?client_id=1078594260506513408&permissions=8&scope=bot%20applications.commands)`}])
             await interaction.followUp({embeds: [mainPage], components: [row]})
    }
}
