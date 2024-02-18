const { Permissions } = require('discord.js');

module.exports = {
  name: 'ban',
  category: 'Moderation',
  description: 'Bans a user from the server.',
  usage: '<user> [reason]',
  userPerms: ["BanMembers"],
  clientPerms: ["BanMembers"],
  execute: async (message, args, client) => {
    const member = message.mentions.members.first();
    const reason = args.slice(1).join(' ');

    if (!member) {
      return message.reply({ content: 'Please mention a valid user.' });
    }

    if (!member.bannable) {
      return message.reply({ content: 'I cannot ban this user.' });
    }

    if (!reason) {
      return message.reply({ content: 'Please provide a ban reason.' });
    }

    try {
      await member.ban({ reason });
      message.channel.send({ content: `${member.user.tag} has been banned from the server.` });
    } catch (err) {
      console.error(err);
      message.reply({ content: 'An error occurred while trying to ban this user.' });
    }
  },
};
