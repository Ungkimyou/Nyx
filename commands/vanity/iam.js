const Discord = require("discord.js");
const config = require("../../config.json");

module.exports.run = async (client, message, args) => {
    
    if (message.channel.id !== ("410526913879080960"))
        return;
    //Build -iam help Embed.
    var iamHelpEmbed = new Discord.RichEmbed()
    .setTitle("Command: IAm")
    .setColor("#f4392b")
    .setThumbnail(message.author.avatarURL)
    .addField("Description: ", "Gives you a role of your choice.")
    .addField("Usage: ", "-iam <Role>")
    .addField("Example: ", "-iam factions")
    .setFooter("Nyx v1.4.0 | Made By: Wolf#9001", client.user.avatarURL)

    //Define the arguments for -iam.
    let gamemode = args;
    let facsrole = message.guild.roles.find(r => r.id === "556189435796914204");
    let sbrole = message.guild.roles.find(r => r.id === "556189434672971777");
    let prisonrole = message.guild.roles.find(r => r.id === "556189416172027910");
    let colourrole = message.guild.roles.find(r => r.id === "566689848979619860");
    let member = message.member;
    if (!gamemode) return message.channel.sendEmbed(iamHelpEmbed);
    if (args[0] != "factions" && args[0] != "prison" && args[0] != "skyblock" && args[0] != "colour") return message.channel.sendEmbed(iamHelpEmbed);
 
    //Build .iam message Embed.
    var leaderEmbed = new Discord.RichEmbed()
    .setTitle("Role Added")
    .setColor("#f4392b")
    .setThumbnail(message.author.avatarURL)
    .addField("Role Added To:", `${message.author.username}`)
    .addField("Role Name:", `${gamemode}`)
    .setFooter("Nyx v1.4.0 | Made By: Wolf#9001", client.user.avatarURL)
    
  //Sending the completed message.
    if(args[0].toLowerCase() == "factions" && !member.roles.has(556189435796914204)) {
        await member.addRole(facsrole);
        await message.channel.send(leaderEmbed);
        }
    if(args[0].toLowerCase() == "colour" && !member.roles.has(566689848979619860)) {
        await member.addRole(colourrole);
        await message.channel.send(leaderEmbed);
        }
    if(args[0].toLowerCase() == "skyblock" && !member.roles.has(556189434672971777)) {
        await member.addRole(sbrole);
        await message.channel.send(leaderEmbed);
        }
    if(args[0].toLowerCase() == "prison" && !member.roles.has(556189416172027910)) {
        await member.addRole(prisonrole);
        await message.channel.send(leaderEmbed);
        }
  }

module.exports.help = {
    name: "iam"
}
