const { Permissions } = require("discord.js");

module.exports = {
  name: "unban",
  category: "Moderation",
  description: "Unbans the specified user.",
  args: true,
  usage: "<user id>",
  userPerms: ["BanMembers"],
  clientPerms: ["BanMembers"],
  execute: async (message, args) => {
    const userId = args[0];
    if (!userId) {
      return message.reply("Please provide a valid user ID to unban.");
    }

    try {
      const bannedUser = await message.guild.members.unban(userId);
      message.reply(`Successfully unbanned user with ID ${userId}.`);
    } catch (error) {
      message.reply("Could not unban user. Please ensure the user ID is valid and that they are currently banned.");
    }
  }
}
