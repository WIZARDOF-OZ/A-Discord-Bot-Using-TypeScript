import { MessageEmbed } from 'discord.js'
import { ICommand } from 'wokcommands'
import config from '../../../src/config'
export default { 
    category: 'Owner',
    description: 'Use to evaluate code',
     ownerOnly: true,


    callback: ({message, args}) => {

        const errorEmbed = new MessageEmbed()
        .setAuthor(message.author.tag)
        .setColor("RED" || config.color.error)
        .setDescription(`${config.emoji.error} Please provide some code to evaluate`)
        .setFooter(`Requested By ${message.author.tag}`)
        if(!args[0]) return errorEmbed
        
else{
        let process = args.join(" ");
        if(!process){
            return new MessageEmbed()
            .setDescription(`${config.emoji.error}Please give me to evaluate`)
            .setColor(`RED` || config.color.error)

        }

        let evaluate;
        try{
            evaluate = eval(process);
        } catch (err) {
         evaluate = err;
        }

        let evaluateEmbed = new MessageEmbed()
        .setTitle("Eval Command")
        .setColor("RANDOM" || config.color.success)
        .addField("Input", "```" + process + "```")
        .addField("Output", "```js" + evaluate + "```")
        .addField("Type Of", `\`\`\`${typeof evaluate}\`\`\``);

        return evaluateEmbed
    }
    }
} as ICommand