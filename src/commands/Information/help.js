const { EmbedBuilder, ActionRowBuilder, ButtonStyle, StringSelectMenuBuilder, ButtonBuilder, ComponentType } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
module.exports = {
    name: "help",
    category: "Information",
    aliases: [ "h" ],
    description: "Return all commands, or one specific command",
    args: false,
    usage: "",
    permission: [],
    owner: false,
 execute: async (message, args, client, prefix) => {
 let categories = [];
        let cots = [];
        const api_ping = client.ws.ping;
        const duration1 = moment
          .duration(message.client.uptime)
          .format(" d [days], h [hrs], m [mins], s [secs]");
        const about = message.client.emoji.about;
        const infoArr = new Array();
   const musicArr = new Array();
   const plArr = new Array();
   const conrr = new Array();
        let guildsCounts = await client.guilds.fetch();
        let userCounts = client.guilds.cache.reduce(
          (acc, guild) => acc + guild.memberCount,
          0
        );
   
   
        



 const embedFields = [
    {name : `**COMMANDS:**` , value : `
> <:winkle_info:1111611873561948181>  \`:\` INFO
> <:winkle_music:1111611910933184612>  \`:\` MUSIC
> <:winkle_mod:1111611883062050866>  \`:\` MODERATION                    
> <:winkle_filter:1111611891224170516>  \`:\` FILTERS
> <:winkle_playlist:1111611897922461726>  \`:\` PLAYLIST
> <:winkle_setting:1111611904704643105>  \`:\` SETTINGS`},
    {name : `**Stats:**`, value : `**<:Guild_administrator_white_theme:1107183009423183972> Guilds:** ${client.guilds.cache.size}\n**<:Users:1107183287874629703> Users:** ${userCounts}\n**<a:Uptime:1097180758264782848> Uptime:** ${duration1}`}
]
 /*const embed = new EmbedBuilder()
    .setAuthor({ name: 'Winkle Music Help', iconURL: 'https://cdn.discordapp.com/avatars/1015957171919388714/1ef207b148f3994477d17a32780e024e.png?size=1024'})
    .setDescription(`**<:icons:1081476310624374854> Prefix For This Server \`${prefix}\`\n<:icons:1081476310624374854> Type \Total Command: 50 | Usable By You: 48\n<:icons:1081476310624374854> [Vote](https://top.gg/bot/1015957171919388714/vote) | [Support](https://discord.gg/winklebot) | [Invite](https://discord.com/api/oauth2/authorize?client_id=1015957171919388714&permissions=8&scope=bot%20applications.commands) | [Dash](https://winkleop.me/)**`)
   .addFields(embedFields)
   .setThumbnail(client.user.displayAvatarURL())
    .setColor("#2500ff")
    .setTimestamp()
    .setImage("https://share.creavite.co/quBjJ7askNu06QGM.gif")
    .setFooter({text: `Made By Team Winkle`, iconURL: message.author.displayAvatarURL({ dynamic: true })})*/
   const embed = new EmbedBuilder()
    .setAuthor({name: `Winkle Music Help`, iconURL: client.user.displayAvatarURL({dynamic: true})}) 
  // .setTitle("Winkle Music Help")
   .setThumbnail(client.user.displayAvatarURL())
     .setColor("Blue")
   .setDescription(`**Winkle is an advanced Music bot with best reconnection and Beatuiful Music quality.**\n- Use the buttons/select menu Below to get started!\n- Prefix for This server \`${prefix}\`\n`)
   .addFields({ name: '**Categories**', value: `> <:winkle_info:1111611873561948181>  \`:\` [Info](https://invite.winkleop.me)\n> <:winkle_music:1111611910933184612>  \`:\` [Music](https://invite.winkleop.me)\n> <:winkle_mod:1111611883062050866>  \`:\` [Moderation](https://invite.winkleop.me)\n> <:winkle_filter:1111611891224170516>  \`:\` [Filters](https://invite.winkleop.me)\n> <:winkle_playlist:1111611897922461726>  \`:\` [Playlist](https://invite.winkleop.me)\n> <:winkle_setting:1111611904704643105>  \`:\` [Settings](https://invite.winkleop.me)`, inline: true },
              {name: 'Links', value: `[Support Server](https://discord.gg/56XCc22vYK) | [Dashboard](https://winkleop.me/) | [Vote](https://top.gg/bot/1015957171919388714/vote)`});
   client.commands.map((a) => {
     switch(a.category){
       case "Information":
         infoArr.push(`\`${a.name}\``);
       break;
       case "Music":
         musicArr.push(`\`${a.name}\``)
       break;
       case "Playlist":
         plArr.push(`\`${a.name}\``);
       break;
       case "Config":
         conrr.push(`\`${a.name}\``);
       break;
     }
   })
   const cmdList = new EmbedBuilder()
   .setAuthor({ name: "Winkle Music Help", iconURL: client.user.displayAvatarURL({ dynamic: true }) })
     .setThumbnail(client.user.displayAvatarURL())
   .setDescription(`**Information Commands:**\n ${infoArr.join(" , ")}\n**Music Commands:**\n ${musicArr.join(" , ")}\n**Playlist Commands:**\n${plArr.join(" , ")}\n**Config:**\n${conrr.join(" , ")}`)
   .setColor("Blue")

// cmd list emoji = 
   // home = 
   
    const buttons = {
        home: new ButtonBuilder()
        .setLabel("Home")
        .setEmoji("1134540394294677516")
        .setStyle(ButtonStyle.Secondary)
        .setCustomId("helpcmd-home"),
        list: new ButtonBuilder()
        .setLabel("Commands List")
        .setEmoji("1134540425168945226")
        .setStyle(ButtonStyle.Secondary)
        .setCustomId("helpcmd-list")
    }
   buttons.home.setDisabled(true);
    const row = new ActionRowBuilder()
        .addComponents(
          buttons.home,
          buttons.list
        )

   const row2 = new ActionRowBuilder()
        .addComponents(
            new StringSelectMenuBuilder()
                .setCustomId('helpop')
                .setPlaceholder('Choose The Module.')
                .addOptions([
                {
                    label: 'INFO',
                    
                    value: 'first',
                  emoji: '<:info:1083754618988810380>'
                },
                  {
                    label: 'MUSIC',

                    value: 'second',
                    emoji:
                      '<:music:1083754645173846036>'
                  },
                {
                    label: 'FILTERS',
                    
                    value: 'third',
                    emoji: '<:icons_play:1083754784433127464>'
                    
                },
                                                {
                    label: 'MODERATION',
                    
                    value: 'sixth',
                    emoji: '<:Moderation:1099333601545437205>'
                },
                {
                    label: 'SETTINGS',
                    value: 'fourth',
                   emoji: '<:Icons_utility:1083754845070180424>'                },
                {
                    label: 'PLAYLIST',
                    
                    value: 'fifth',
       emoji: '<:fileicon:1083754718658039838>'                }, 
            ])
        )
   if (!args[0]){     
    const msg = await message.channel.send({ embeds: [embed], components: [row, row2] });
    const collector = msg.createMessageComponentCollector({ componentType: ComponentType.Button , time: 180e+2 });

collector.on('collect', async i => {
	try{
    const cid = i.customId;
  switch(cid){
    case "helpcmd-home": {
      buttons.list.setDisabled(false);
      buttons.home.setDisabled(true);
      msg.edit({ embeds: [embed], components: [row, row2] });
      await i.deferUpdate().catch(() => {});
    } break;
    case "helpcmd-list": {
      buttons.list.setDisabled(true);
      buttons.home.setDisabled(false);
      msg.edit({ embeds: [cmdList], components: [row, row2] });
      await i.deferUpdate().catch(() => {}); // catch for promise rejection cases
    } break;
                          }
  } catch (err){
    console.log(err)
  }
});
        }

   }
 }  
