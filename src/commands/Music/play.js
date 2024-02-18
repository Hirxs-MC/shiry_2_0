const { EmbedBuilder, PermissionsBitField, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { convertTime } = require("../../utils/convert");
const { Player } = require("erela.js");
const schema = require('../../schema/prefPlatform');

module.exports = {
  name: "play",
  category: "Music",
  aliases: ["p"],
  description: "Plays audio from any supported source.",
  args: true,
  usage: "<song URL or name>",
  userPerms: [],
  owner: false,
  player: false,
  inVoiceChannel: true,
  sameVoiceChannel: true,
  execute: async (message, args, client, prefix) => {
    const data = await schema.findOne({ User: message.author.id })
    if (
      !message.guild.members.me.permissions.has(
        PermissionsBitField.resolve(["Speak", "Connect"])
      )
    )
      return message.channel.send({
        embeds: [
          new EmbedBuilder()
            .setColor(client.embedColor)
            .setDescription(
              `I don't have enough permissions to execute this command! Please give me permission to \`CONNECT\` or \`SPEAK\`.`
            ),
        ],
      });
    const { channel } = message.member.voice;
    if (
      !message.guild.members.cache
        .get(client.user.id)
        .permissionsIn(channel)
        .has(PermissionsBitField.resolve(["Speak", "Connect"]))
    )
      return message.channel.send({
        embeds: [
          new EmbedBuilder()
            .setColor(client.embedColor)
            .setDescription(
              `I don't have enough permissions connect your VC! Please give me permission to \`CONNECT\` or \`SPEAK\`.`
            ),
        ],
      });

    const emojiaddsong = message.client.emoji.addsong;
    const emojiplaylist = message.client.emoji.playlist;

    /**
     * @type {Player}
     */
    let player = client.manager.get(message.guild.id);

    if (!player)
      player = await client.manager.create({
        guild: message.guild.id,
        voiceChannel: message.member.voice.channel.id,
        textChannel: message.channel.id,
        selfDeafen: true,
        volume: 80,
      });

    if (player.state != "CONNECTED") await player.connect();
    const search = args.join(" ");
    if(args.join(" ").includes(`https://youtu.be`) || args.join(" ").includes(`https://www.youtube.com/`)) {
      return message.channel.send({embeds : [new EmbedBuilder().setColor(message.guild.members.me.displayHexColor !== `#000000` ? message.guild.members.me.displayHexColor : `#2f3136`).setDescription(`Due to recent pressure from both Discord and Google, we have disabled YouTube links being played through the bot.This will most likely be a permanent change in order to avoid the bot being unverified`)]})
    }
    let platCheck = true;
    let msg;
    if(!data) platCheck = false;
    if(!platCheck){
      msg = await message.reply({ embeds: [ new EmbedBuilder().setTitle("Choose A Method").setDescription("Please Choose the platform you want to search on")], components: [ new ActionRowBuilder().addComponents(new ButtonBuilder().setLabel("Youtube").setCustomId("play-plat-yt").setStyle(ButtonStyle.Danger), new ButtonBuilder().setLabel("Spotify").setCustomId("play-plat-sp").setStyle(ButtonStyle.Success)) ] })
    }
    
  }
}