const { EmbedBuilder, CommandInteraction, Client, ActionRowBuilder, ButtonBuilder, ButtonStyle, ApplicationCommandType } = require("discord.js")

module.exports = {
    name: "about",
    description: "See information about this project.",
    type: ApplicationCommandType.ChatInput,
    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */

    run: async (client, interaction) => {
        await interaction.deferReply({
            ephemeral: true
        });
        
        const button = new ButtonBuilder()
            .setLabel("Invite")
            .setStyle(ButtonStyle.Link)
            .setURL(`https://discord.com/api/oauth2/authorize?client_id=1078594260506513408&permissions=8&scope=bot%20applications.commands`)

      const button2 = new ButtonBuilder()
            .setLabel("Support")
            .setStyle(ButtonStyle.Link)
            .setURL("https://discord.gg/8ggjwjahhx");

        const row = new ActionRowBuilder().addComponents(button, button2);

        const mainPage = new EmbedBuilder()
            .setAuthor({ name: 'Delux Tunes', iconURL: 'https://media.discordapp.net/attachments/1013894107707478106/1067494881628536902/f01ef3a2be8442bac0f3f836b6403112.webp'})
            .setThumbnail('https://media.discordapp.net/attachments/1013894107707478106/1067494881628536902/f01ef3a2be8442bac0f3f836b6403112.webp')
            .setDescription(`**Delux Tunes is an Advanced Music bot with Quality Music and Slash Commands with much more features**`)
        .setColor(client.embedColor)
        .setFooter({text: `Developed With ❤️ By " ~ 𝑺 𝒉 𝒖 𝒃 𝒉 . ៹ 🥀#5190`, iconURL: interaction.member.displayAvatarURL({dynmaic: true})})            .addFields([{ name: 'Developer <a:Developer:1067873742597931039>', value: '**[" ~ 𝑺 𝒉 𝒖 𝒃 𝒉 . ៹ 🥀#5190](https://discord.com/users/982856398847242242)**', inline: true },
            
                { name: 'Early Supporters <a:early_supporter:1067873394231627867>', value: `**[~ Badshah_xD ⁶⁹ ✨🖤#0143](https://discord.com/users/1019968348257267712)** | **[Nҽzzყ#6969](https://discord.com/users/635207912335343630)** | **[ᴹᵂ〢OZUMA xD#2008](https://discord.com/users/1029065620878282792)**
                `, inline: true },
            ]);
        await interaction.followUp({ embeds: [mainPage], components: [row] });
    }
}
