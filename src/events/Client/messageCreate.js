const { EmbedBuilder, Message, Client, PermissionsBitField , ActionRowBuilder , ButtonStyle , ButtonBuilder } = require("discord.js");
const db = require("../../schema/prefix.js");
const db2 = require("../../schema/dj");
const db3 = require("../../schema/setup");
const db4 = require(`../../schema/noprefix`);
let discord = require("discord.js")

module.exports = {
    name: "messageCreate",
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @returns 
     */
    run: async (client, message) => {

        if (message.author.bot) return;
        
        let prefix = client.prefix;
        const ress = await db.findOne({ Guild: message.guildId })
        if (ress && ress.Prefix) prefix = ress.Prefix;
        let data = await db3.findOne({ Guild: message.guildId });
        if (data && data.Channel && message.channelId === data.Channel) return client.emit("setupSystem", message);

        const mention = new RegExp(`^<@!?${client.user.id}>( |)$`);
        if (message.content.match(mention)) {
            const embed = new EmbedBuilder()
                .setAuthor({name:`| Delux Tunes `,
      iconURL:client.user.displayAvatarURL()})
      .setThumbnail(client.user.displayAvatarURL())
                .setColor(client.embedColor)
                .setFooter({text: `Developed With ❤️ By ~ Ɱxybe_ShuBH⁶⁹💘#5190 `, iconURL: message.author.displayAvatarURL({ dynamic: true })})
                .setDescription(`**Hey I'm Delux Tunes, A Best Quality Music Bot!**`)
                
    .addFields([
      { name: '__**Links**__', value: 
'**[Invite](https://discord.com/api/oauth2/authorize?client_id=1078594260506513408&permissions=8&scope=bot%20applications.commands)** | **[Support](https://dsc.gg/delux-tunes)**', inline: true },
      
            { name: '__**Guild Settings**__', value: `**My Prefix : \`${prefix}\`
Language : Eng
Server I'd : \`${message.guild.id}\`
Type \`${prefix}\`help To Get The Commands List**`, inline: true },
      ]);
      
          const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setLabel("Invite")
          .setStyle(ButtonStyle.Link)
          .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot`),
        
        new ButtonBuilder()
          .setLabel("Support")
          .setStyle(ButtonStyle.Link)
          .setURL("https://discord.gg/taop")
      );
                
             
            message.channel.send({ embeds: [embed] , components : [row]})
        };
        let np = [];
        let npData = await db4.findOne({userId: message.author.id,noprefix: true});
      if(npData) np.push(message.author.id);
      
      let regex = new RegExp(`^<@!?${client.user.id}>`);
      let pre = message.content.match(regex) ? message.content.match(regex)[0] : prefix;
      if(!np.includes(message.author.id)){
        if(!message.content.startsWith(pre)) return;
      }

      const args = np.includes(message.author.id) === false ? message.content.slice(pre.length).trim().split(/ +/) : message.content.startsWith(pre) === true ? message.content.slice(pre.length).trim().split(/ +/) : message.content.trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        const command = client.commands.get(commandName) ||
            client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

        if (!command) return;
if (command.voteonly){
  let vote = await client.topgg.hasVoted(message.author.id)

  if(!vote){
    let embed = new EmbedBuilder()
    .setAuthor({ name: 'Winkle Music', iconURL: 'https://cdn.discordapp.com/avatars/1015957171919388714/d488bb22767e52bdd0e11a6f9526ac06.png?size=1024'})
    .setDescription("You have to Vote Me for this command\n[Vote From Here!](https://top.gg/bot/1015957171919388714/vote)")
    
    return message.channel.send({embeds:[embed]})
  }
}

        if (!message.guild.members.me.permissions.has(PermissionsBitField.resolve('SendMessages'))) return await message.author.dmChannel.send({ content: `I don't have **\`SEND_MESSAGES\`** permission in <#${message.channelId}> to execute this **\`${command.name}\`** command.` }).catch(() => { });

        if (!message.guild.members.me.permissions.has(PermissionsBitField.resolve('ViewChannel'))) return;

        if (!message.guild.members.me.permissions.has(PermissionsBitField.resolve('EmbedLinks'))) return await message.channel.send({ content: `I don't have **\`EMBED_LINKS\`** permission in <#${message.channelId}> to execute this **\`${command.name}\`** command.` }).catch(() => { });

        const embed = new EmbedBuilder()
            .setColor('#2f3136')

        if (command.args && !args.length) {
            let reply = `You didn't provide any arguments, ${message.author}!`;

            if (command.usage) {
                reply += `\nUsage: \`${prefix}${command.name} ${command.usage}\``;
            }

            embed.setDescription(reply);
            return message.channel.send({ embeds: [embed] });
        }

        if (command.botPerms) {
            if (!message.guild.members.me.permissions.has(PermissionsBitField.resolve(command.botPerms || []))) {
                embed.setDescription(`I don't have **\`${command.botPerms}\`** permission in <#${message.channelId}> to execute this **\`${command.name}\`** command.`);
                return message.channel.send({ embeds: [embed] });
            }
        }
        if (command.userPerms) {
            if (!message.member.permissions.has(PermissionsBitField.resolve(command.userPerms || []))) {
                embed.setDescription(`You don't have **\`${command.userPerms}\`** permission in <#${message.channelId}> to execute this **\`${command.name}\`** command.`);
                return message.channel.send({ embeds: [embed] });
            }
        }

        if (command.owner && message.author.id !== `${client.owner}`) {
            embed.setDescription(`Only <@${client.owner}> Can Use this Command`);
            return message.channel.send({ embeds: [embed] });
        }

        const player = message.client.manager.get(message.guild.id);

        if (command.player && !player) {
            embed.setDescription("There is no player for this guild.");
            return message.channel.send({ embeds: [embed] });
        }

        if (command.inVoiceChannel && !message.member.voice.channelId) {
            embed.setDescription("You must be in a voice channel!");
            return message.channel.send({ embeds: [embed] });
        }

        if (command.sameVoiceChannel) {
            if (message.guild.members.me.voice.channel) {
                if (message.guild.members.me.voice.channelId !== message.member.voice.channelId) {
                    embed.setDescription(`You must be in the same channel as ${message.client.user}!`);
                    return message.channel.send({ embeds: [embed] });
                }
            }
        }
        if (command.dj) {
            let data = await db2.findOne({ Guild: message.guild.id })
            let perm = 'MuteMembers';
            if (data) {
                if (data.Mode) {
                    let pass = false;
                    if (data.Roles.length > 0) {
                        message.member.roles.cache.forEach((x) => {
                            let role = data.Roles.find((r) => r === x.id);
                            if (role) pass = true;
                        });
                    };
                    if (!pass && !message.member.permissions.has(perm)) return message.channel.send({ embeds: [embed.setDescription(`You don't have permission or dj role to use this command`)] })
                };
            };
        }

        try {
            command.execute(message, args, client, prefix);
        } catch (error) {
            console.log(error);
            embed.setDescription("There was an error executing that command.\nI have contacted the owner of the bot to fix it immediately.");
            return message.channel.send({ embeds: [embed] });
        }
    }
};
