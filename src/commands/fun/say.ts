import { MessageEmbed } from "discord.js";
import Discord from 'discord.js';
import { ICommand } from "wokcommands";
import config from "../../../src/config";

export default {
    names:'say',
    description:'tells the bot say something',
    permissions:["ADMINISTRATOR"],
     slash: 'both',
    category: "Fun",
    testOnly: true,
    options:[
        {
        name:'message',
        description:'Type the msg',
        type: Discord.Constants.ApplicationCommandOptionTypes.STRING
        }
    ], 

    callback: ({message, args , text, interaction}) => {


try{
        
   const errEmbed = new MessageEmbed()
 .setColor('RANDOM' || config.color.error)
 .setDescription(`${config.emoji.error}Please provide some text`)
if(!args[0]) return errEmbed

else{
 const sayEmbed = new MessageEmbed()
 .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
        .setDescription(args.join(" "))
      
        .setTimestamp()
        .setColor("RANDOM")
        .setFooter(`Requested By ${message.author.tag}`)
 message.reply({
   embeds: [sayEmbed]
 })

//  if(interaction){
//      let newEmbed =  new MessageEmbed()
//      .setDescription(args.join(" "))
//      .setColor("RANDOM")
//      return newEmbed;
//  }  else{
//    return  errEmbed
//  }     


}
} catch(err){
    return err
}





    }
} as ICommand