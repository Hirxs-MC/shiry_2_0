const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ComponentType } = require("discord.js");

module.exports = {
    name: "about",
    category: "Information",
    aliases: ["botinfo", "info"],
    description: "See information about this project.",
    args: false,
    usage: "",

    userPerms: [],
    owner: false,
    voteonly: false,

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
                .setURL("https://discord.gg/8ggjwjahhx") // make new account or mail to discord
            ); // skyopg       send hi to me   sended you request accept it. give your id to me 1119420130112315452 send me hi pls i got captcha
        const opt = [
            new StringSelectMenuOptionBuilder() 
            .setLabel("Developers")
            .setDescription("A list of the developers of the Winkle project")
            .setValue("devs")
            .setEmoji("🧑‍💻"),
            new StringSelectMenuOptionBuilder() 
            .setLabel("Support")
            .setDescription("People with enough experience with the bot, can help with using the bot")
            .setValue("sups")
            .setEmoji("🔗"),
            new StringSelectMenuOptionBuilder() 
            .setLabel("Developers")
            .setDescription("A list of the developers of the Winkle project")
            .setValue("devs")
            .setDefault(true)
            .setEmoji("🧑‍💻"),
            new StringSelectMenuOptionBuilder() 
            .setLabel("Support")
            .setDescription("People with enough experience with the bot, can help with using the bot")
            .setValue("sups")
            .setDefault(true)
            .setEmoji("🔗")
        ];
        const smenu = new StringSelectMenuBuilder()
        .setCustomId("actionRow")
        .setPlaceholder("Select One...")
        .addOptions(
          opt[0],
          opt[1]
        )
        const smenu2 = new StringSelectMenuBuilder()
        .setCustomId("actionRow")
        .setPlaceholder("Select One...")
        .addOptions(opt[2], opt[1]);
        const smenu3 = new StringSelectMenuBuilder()
        .setCustomId("actionRow")
        .setPlaceholder("Select One...")
        .addOptions(opt[0], opt[3])
        
        const Menu = new ActionRowBuilder()
        .addComponents(smenu)
        const Menu2 = new ActionRowBuilder()
        .addComponents(smenu2)
        const Menu3 = new ActionRowBuilder()
        .addComponents(smenu3)
      
        const mainPage = new EmbedBuilder()
            .setAuthor({ name: 'Winkle Music', iconURL: client.user.displayAvatarURL({ dynamic: true })})
 .setThumbnail('https://media.discordapp.net/attachments/1013894107707478106/1067494881628536902/f01ef3a2be8442bac0f3f836b6403112.webp')
            .setDescription(`**Winkle is an advanced Music bot with best reconnection and Beatuiful Music quality.**\n- Hey! Its winkle an Advanced Music bot! Use the dropdowns Below to Get more Infomations!\n> [Privacy Policy](https://github.com/UjjwalxD/Winkle-Bot)\n> [License](https://github.com/UjjwalxD/Winkle-Bot)`)
            .setColor(client.embedColor)
            .setFooter({  text: `Created With 💗 by Demon & Sky!`, iconURL: client.user.displayAvatarURL({ dynamic: true })})

            const msg = await message.channel.send({ embeds: [mainPage], components: [row ,Menu] });

          const collector = await msg.createMessageComponentCollector({ componentType: ComponentType.StringSelectMenu, time: 180e2 })

          collector.on("collect", async i => {
            const cid = i.customId;
            const options = i.values;
            switch(cid){
              case "actionRow": {
                switch(options[0]){
                  case "devs": {
                    const dev = new EmbedBuilder()
                    .setAuthor({ name: 'Winkle Music', iconURL: client.user.displayAvatarURL({ dynamic: true })})
                    .setFooter({  text: `Created With 💗 by Demon & Sky!`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
                    .setThumbnail('https://media.discordapp.net/attachments/1013894107707478106/1067494881628536902/f01ef3a2be8442bac0f3f836b6403112.webp')
                    .setDescription(`Hey, Here are my Developers Below:\n> [demon.1139](https://github.com/UjjwalxD)\n> [Sky](https://github.com/SkyOPG)`)
                    .setColor(client.embedColor)
                    Menu.components[0].options[0].setDefault(true)
                    Menu.components[0].options[1].setDefault(false)

                    await msg.edit({ embeds: [dev], compoenents: [row, Menu] })
                    await i.deferUpdate().catch(()=>{})
                  } break;
                  case "sups": {
                    const sup = new EmbedBuilder()
                    .setAuthor({ name: 'Winkle Music', iconURL: client.user.displayAvatarURL({ dynamic: true })})
                    .setFooter({  text: `Created With 💗 by Demon & Sky!`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
                    .setThumbnail('https://media.discordapp.net/attachments/1013894107707478106/1067494881628536902/f01ef3a2be8442bac0f3f836b6403112.webp')
                    .setDescription(`Coming soon!`).setColor(client.embedColor)

                    Menu.components[0].options[0].setDefault(false)
                    Menu.components[0].options[1].setDefault(true)
                  
                    await msg.edit({ embeds: [sup], compoenents: [row, Menu] });
                    await i.deferUpdate().catch(()=>{}) // promise resolve ok
                  } break;
                }
              }
            }
          }) 
    }
}