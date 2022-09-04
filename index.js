const Discord = require('discord.js')
const client = new Discord.Client()
const probot = require('probot-tax-npm')
const prefix = "+"
client.on('message', msg => {
    if(msg.content.startsWith(prefix + "tax")){
        const args = msg.content.split(" ").slice(1).join(" ")
        const args2 = args.replace("k","000").replace("m", "000000").replace('M', "000000").replace('K', "000")
if(!args) return 
msg.channel.send(probot(args2))
        

    }
})

client.on('ready', () => {
    console.log(`[${client.user.tag}] Ready To Use (:`)
})

//Token La Bashi env Danne
client.login(process.env.token)


//coded by Unknown