const { Permissions } = require("discord.js");

module.exports = {
  name: "unlock",
  category: "Moderation",
  description: "Unlocks the current channel.",
  usage: "[reason]",
  userPerms: ["ManageChannels"],
  botPerms: ["ManageChannels"],
  execute: async (message, args) => {
    try {
      const reason = args.join(" ") || "No reason provided.";

      // Update the permissions for @everyone to allow sending messages and adding reactions
      await message.channel.permissionOverwrites.edit(message.guild.roles.everyone, {
        SendMessages: true,
        AddReactions: true,
      });

      // Send a success message
      await message.channel.send(`🔓 This channel has been unlocked.\n\n**Reason:** ${reason}`);
    } catch (err) {
      console.error(err);
      message.reply("An error occurred while trying to unlock this channel.");
    }
  },
};
