import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";
import config from '../../../src/config'
import '../../config'

let instance = {
    color_error: config.color.error,
    color_success: config.color.success,
    color_info: config.color.info
}
export default {
    category: 'Fun',
    description: 'Sends an embed with the given msg',
    permissions: ["VIEW_CHANNEL"],

callback: async({message, text, args}) => {

  const errorEmbed = new MessageEmbed()
  .setAuthor(message.author.tag)
  .setColor("RED" || instance.color_error)
  .setDescription(`${config.emoji.error} Please provide some text`)
  .setFooter(`Requested By ${message.author.tag}`)
  if(!args[0]) return errorEmbed

  else{
          
 const Myembed = new MessageEmbed()
    .setDescription(message.content.substring(6) || `Hello, ${message.author} you can use embed command as ${config.defaultPrefix}embed {your message} `)
    .setColor('RANDOM')
    .setFooter(`Requested By ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
//  .setThumbnail(`${message.guild?.iconURL({dynamic: true})}`)

return Myembed

// Use this if you want to edit any part of a embed in the given time
// const newMessage = await message.reply({
//     embeds:[Myembed],
// })


// await new Promise(resolve => setTimeout(resolve, 5000))

// const newEmbed = newMessage.embeds[0]
// .setDescription('Description has been changed')

// newMessage.edit({
//     embeds:[newEmbed]
// })

  }




}

} as ICommand