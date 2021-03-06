const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  if (message.author.id !== ("298812170093723649")) 
     return;
    
   const users = client.users;
   const searchTerm = args[0];

  if (!searchTerm)
     return message.channel.send('Please provide a search term.');

   const matches = users.filter(u => u.id.startsWith(searchTerm));
    
  if (!matches) {
     return message.channel.send('No id matches.');
} else {
    return message.channel.send(matches.map(u => u.tag).join(',\n'));
       }
};
module.exports.help = {
    name: "searchuserid",
    aliases: [ "suid", "searchuid" ],
    description: "Search for users matching a specific User ID pattern.",
    usage: "searchuserid <IDPattern>",
    example: "searchuserid 395",
    category: "Developer"
  }
