const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const {getMember, formatDate} = require("../../functions.js");
const config = require("../../config.json");

module.exports.run = async (client, message, args) => {

    const member = getMember(message, args.join(" "));

    // Member variables
    const joined = formatDate(member.joinedAt);
    const roles = member.roles
        .filter(r => r.id !== message.guild.id)
        .map(r => r).join(", ") || 'none';

    // User variables
    const created = formatDate(member.user.createdAt);

    const embed = new RichEmbed()
        .setThumbnail(member.user.displayAvatarURL)
        .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)

        .addField('Member Information:', stripIndents`> **Display Name:** ${member.displayName}
        > **Joined At:** ${joined}
        > **Roles:** ${roles}`)

        .addField('User Information:', stripIndents`> **ID:** ${member.user.id}
        > **Created At:** ${created}
        > **Username:** ${member.user.tag}`)
        
        .setFooter(`${config.version} | Requested By: ${message.author.tag}`, client.user.avatarURL)

    if (member.user.presence.game) 
        embed.addField('Currently Playing:', stripIndents`> **Game:** ${member.user.presence.game.state}`);

    message.channel.send(embed);

}

module.exports.help = {
    name: "whois",
    aliases: ["uinfo", "userinfo"],
    description: "Get information about a user.",
    usage: "whois [User]",
    example: "whois @Jet",
    category: "Util"
}
