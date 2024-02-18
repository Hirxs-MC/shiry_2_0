const { EmbedBuilder, ActionRowBuilder, ButtonStyle, StringSelectMenuBuilder, Events, ButtonBuilder, editEmbed } = require("discord.js");
const MusicBot = require("./structures/Client");
const { keep_alive } = require("./keep_alive");


const topgg = require("@top-gg/sdk")

const client = new MusicBot();

client.connect()
client.topgg = new topgg.Api("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwMTU5NTcxNzE5MTkzODg3MTQiLCJib3QiOnRydWUsImlhdCI6MTY4Mjc2NDg0OH0.x04ptPIfCieCQ0yvtN945wDxX143ZhkECcozc4Mkl4Y")

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isStringSelectMenu()) return;
  
process.on('unhandledRejection', (reason, p) => {
    console.log(reason, p);
});

process.on('uncaughtException', (err, origin) => {
    console.log(err, origin);
});

process.on('uncaughtExceptionMonitor', (err, origin) => {
    console.log(err, origin);
});
    
    let options = interaction.values;
    const funny = options[0]


if(funny === 'fifth') {
  const embed2 = new EmbedBuilder()
    .setAuthor({name:`|  Playlist Menu `,
      iconURL:client.user.displayAvatarURL()})
      .setDescription(`\n\n**Create, Delete, Info, List, Load, RemoveTrack, SaveCurrent, SaveQueue**\n\n`)
  .setThumbnail(client.user.displayAvatarURL())
    .setColor("#0099ff")
    .setTimestamp()
  .setFooter({ text: `Requested by: ${interaction.member.user.username}`, iconURL: interaction.member.user.displayAvatarURL({ dynamic: true})})
  
        interaction.reply({ embeds: [embed2], ephemeral: true })
        return
}
if(funny === 'third') {
  const embed2 = new EmbedBuilder()
    .setAuthor({name:`|  Filters Menu `,
      iconURL:client.user.displayAvatarURL()})
      .setDescription(`\n\n**Just Type $Filters To Open Filters Panel**\n\n`)
  .setThumbnail(client.user.displayAvatarURL())
    .setColor("#0099ff")
    .setTimestamp()
  .setFooter({ text: `Requested by: ${interaction.member.user.username}`, iconURL: interaction.member.user.displayAvatarURL({ dynamic: true})})
  
        interaction.reply({ embeds: [embed2], ephemeral: true })
        return
    }
if(funny === 'first') {
  const embed4 = new EmbedBuilder()
    .setAuthor({name:`|  Info Menu `,
      iconURL:client.user.displayAvatarURL()})
      .setDescription(`\n\n**Help, Invite, Ping, Node, Stats, Botinfo, Vote**\n\n`)
  .setThumbnail(client.user.displayAvatarURL())
    .setColor("#0099ff")
    .setTimestamp()
  .setFooter({ text: `Requested by: ${interaction.member.user.username}`, iconURL: interaction.member.user.displayAvatarURL({ dynamic: true})})
  
        interaction.reply({ embeds: [embed4], ephemeral: true })
        return
}
if(funny === 'second') {
  const embed5 = new EmbedBuilder()
    .setAuthor({name:`|  Music Menu `,
      iconURL:client.user.displayAvatarURL()})
      .setDescription(`\n\n**Autoplay, ClearQueue, Grab, Join, Leave, Loop, NowPlaying, Pause, Play, Queue, Remove, Seek, Resume, Search, Shuffle, Skip, SkipTO, Volume**\n\n`)
  .setThumbnail(client.user.displayAvatarURL())
    .setColor("#0099ff")
    .setTimestamp()
  .setFooter({ text: `Requested by: ${interaction.member.user.username}`, iconURL: interaction.member.user.displayAvatarURL({ dynamic: true})})
  
        interaction.reply({ embeds: [embed5], ephemeral: true })
        return
}
  if(funny === 'fourth') {
  const embed6 = new EmbedBuilder()
    .setAuthor({name:`|  Settings Menu `,
      iconURL:client.user.displayAvatarURL()})
      .setDescription(`\n\n**Prefix, 24/7, AddDJ, RemoveDJ, ToggleDJ, Setup**\n\n`)
  .setThumbnail(client.user.displayAvatarURL())
    .setColor("#0099ff")
    .setTimestamp()
  .setFooter({ text: `Requested by: ${interaction.member.user.username}`, iconURL: interaction.member.user.displayAvatarURL({ dynamic: true})})
  
        interaction.reply({ embeds: [embed6], ephemeral: true })
        return
}


  if(funny === 'sixth') {
  const embed6 = new EmbedBuilder()
    .setAuthor({name:`|  Moderation Menu `,
      iconURL:client.user.displayAvatarURL()})
      .setDescription(`\n\n**Ban, Kick, Unban, Lock, Unlock. Hide, Unhide, Purge**\n\n`)
  .setThumbnail(client.user.displayAvatarURL())
    .setColor("#0099ff")
    .setTimestamp()
  .setFooter({ text: `Requested by: ${interaction.member.user.username}`, iconURL: interaction.member.user.displayAvatarURL({ dynamic: true})})
  
        interaction.reply({ embeds: [embed6], ephemeral: true })
        return
  }
module.exports = client;
  })