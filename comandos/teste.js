const  Discord = require("discord.js")
const  client = new  Discord.Client()

exports.run = (client, msg, args) => {
	msg.channel.send(`olá ${msg.author}`)
}