const { EmbedBuilder } = require("discord.js");
const Model = require("../../schema/247");

module.exports = {
  name: "247",
  aliases: ["24h", "24/7", "24*7"],
  category: "Config",
  description: "Sets 24/7 mode, bot stays in voice channel 24/7.",
  args: false,
  usage: "",
  voteonly: false,
  userPerms: [],
  owner: false,
  player: true,
  inVoiceChannel: true,
  sameVoiceChannel: true,
  execute: async (message, args, client, prefix) => {
    if(message.author.id !== "1033579545254711336" && message.member.permissions.has("ManageChannels")) return message.channel.send({
        embeds: [
          new EmbedBuilder().setColor(`Red`).setDescription(`You cannot use this command because you don't have the \`ManageChannels\` permission`),
        ]
    })
    const listofIndexes = await Model.find();
    switch(args[0]){
      case "list": {
        const arr = [];
        if(!message.author.id ==="1033579545254711336"||!message.author.id === "1119420130112315452") return;
        listofIndexes.map(a => {
          arr.push(a.Guild)
        })
        message.channel.send({ embeds: [new EmbedBuilder().setAuthor({ name: "Winkle 24/7 guilds list", iconURL: client.user.displayAvatarURL() }).setColor("Blue").setDescription(`${arr.join("\n") || "none to show here"}`)] })
      } break;
      default :{  
      const player = message.client.manager.players.get(message.guild.id);
      const data = await Model.findOne({ Guild: message.guild.id });
      if(!data){
        await Model.create({
          Guild: message.guild.id,
          247: true,
          VoiceChannel: message.member.voice.channelId,
          TextChannel: message.channelId
        });
        return message.channel.send({
          embeds : [
            new EmbedBuilder().setColor(`#2f3136`).setDescription(`✅ Successfully **Enabled** 24/7 mode of the player`)
          ]
        })
      }
      else if(data){
        await data.delete();
        return message.channel.send({
          embeds : [
            new EmbedBuilder().setColor(`#2f3136`).setDescription(`:x: Successfully **Disabled** 24/7 mode of the player`)
          ]
        })
      }}}
  },
};