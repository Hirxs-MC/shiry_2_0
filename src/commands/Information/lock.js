const { Permissions } = require("discord.js");

module.exports = {
  name: "lock",
  category: "Moderation",
  description: "Locks the current channel.",
  usage: "",
  userPerms: ["ManageChannels"],
  botPerms: ["ManageChannels"],
  execute: async (message) => {
    try {
      await message.channel.permissionOverwrites.edit(message.guild.roles.everyone, {
        SendMessages: false,
        AddReactions: false,
      });
      return message.channel.send(`🔒 ${message.channel} has been locked.`);
    } catch (err) {
      console.error(err);
      return message.channel.send("An error occurred while trying to lock the channel.");
    }
  },
};