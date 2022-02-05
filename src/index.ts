import Discord, { Intents } from 'discord.js';
import dotenv from 'dotenv';
// import chalk from 'chalk';
import  TestServer  from "../src/config"
import wok from 'wokcommands'
import path from 'path'
import mongoose from 'mongoose'
import 'dotenv/config'
import config from '../src/config';

const bot = new Discord.Client({

    intents: [
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        Intents.FLAGS.GUILD_MESSAGES,
    ],

})

bot.on('ready', async () => {
// connecting to MONGODB
    // await mongoose.connect(process.env.MongoDB_URL || '', 
    // {
    //     keepAlive: true,
    //     // useNewUrlParser: true,
    //     // useUnifiedTopology: true,
    //     // useFindAndModify: false
    // })

    console.log("Api > Connected")
    bot.user?.setActivity('Made By TypeScript', { type: "PLAYING" })
    
    new wok(bot ,{
        commandsDir: path.join(__dirname,`commands`),
    // Allow importing of .ts files if you are using ts-node
    typeScript: true,
    testServers: TestServer.testServer,
    mongoUri: process.env.MongoDB_URl,
    botOwners: config.owners
    })
    .setDefaultPrefix('$')

     const guildId = '810199045036441681'
    const guild = bot.guilds.cache.get(guildId)

    let commands
    if (guild) {
        commands = guild.commands
    } else {
        commands = bot.application?.commands
    }
    commands?.create({
        name: 'ping',
        description: 'Reply a pong'
    })
    commands?.create({
        name: "add",
        description: 'Adds two numbers',
        options: [
            {
                name: 'number1',
                description: 'the first number',
                required: true,
                type: Discord.Constants.ApplicationCommandOptionTypes.NUMBER

            },
            {
                name: 'number2',
                description: 'the second number',
                required: true,
                type: Discord.Constants.ApplicationCommandOptionTypes.NUMBER
            }
        ]
    })


})

bot.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) {
        return

    }
    const { commandName, options } = interaction

    if (commandName === 'ping') {
        interaction.reply({
            content: "Pong",
            // ephemeral: true
        })
    }else if (commandName === 'add'){
        const num1 = options.getNumber('number1')!
        const num2 = options.getNumber('number2')! 

        await  interaction.deferReply({

        })
         await  new Promise((resolve) => setTimeout(resolve,4000)) 

        await interaction.editReply({
            content: `The sum is ${num1 + num2}`
        })

    }

})


bot.login(process.env.TOKEN)