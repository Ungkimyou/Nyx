const fs = require("fs");
const config = require("../config.json")

exports.run = async (client, role) => {

        let logChannel = client.channels.get("551848305592631297");
        let jarnoUID = role.guild.members.get("420325176379703298");
        let wolfUID = role.guild.members.get("298812170093723649");
        let steveUID = role.guild.members.get("252863893834170369");
        let retard = role.guild.members.get("251129232229531648");
        let wolfRNAME = "Beautiful Dream: DaYbreak | 16 days";
        let jarnoRNAME = "Yeet";
        let server = "290249616484597771"

          if (role.name == jarnoRNAME) {
            await logChannel.send("haha <@251129232229531648> tried to delete <@420325176379703298> role, point and laugh boys.")
            await client.guilds.get(server).createRole({
              name: "Yeet",
              position: 31,
              color: "abcdef"
            })
            let jarnoRR = role.guild.roles.find(role => role.name === "Yeet");
            await jarnoUID.addRole(jarnoRR);
            await steveUID.addRole(jarnoRR);
        }
        if (role.name == wolfRNAME) {
          await logChannel.send("haha <@251129232229531648> tried to delete <@298812170093723649> role, point and laugh boys.")
          await client.guilds.get(server).createRole({
            name: "Beautiful Dream: DaYbreak | 16 days",
            position: 31,
            color: "D70889"
          })
          let wolfRR = role.guild.roles.find(role => role.name === "Beautiful Dream: DaYbreak | 16 days");
          await wolfUID.addRole(wolfRR);
      }
    
        console.log(`Role recreated successfully.`);

}
