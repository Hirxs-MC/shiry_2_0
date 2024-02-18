const { Permissions } = require("discord.js");

module.exports = {
  name: "kick",
  category: "Moderation",
  description: "Kicks the specified user.",
  args: true,
  usage: "<user>",
  userPerms: ["KickMembers"],
  clientPerms: ["KickMembers"],
  execute: async (message, args) => {
    const member = message.mentions.members.first();

    if (!member) {
      return message.reply("Please mention a valid member of this server");
    }

    if (!member.kickable) {
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    }

    const reason = args.slice(1).join(" ") || "No reason provided";

    await member.kick(reason)
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} for "${reason}"`);
  }
}
