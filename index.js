const config = require('./config/config.json')
const Discord = require('discord.js')
const client = new Discord.Client()


    client.login(config.token)
    client.on('ready', () => {console.log("BOT Ligado.") 
    //client.user.setActivity('Notas fiscais no fogo', { type: 'PLAYING' })
})

    client.on('guildMemberAdd', member => {
        const idcanal ='741259320863227927' 
        const boasvindas = `Seja bem-vindo ao servidor de Discord da **Loyalty Contabilidade** ${member}! \nVocê pode utilizar o canal de texto livre até que alguém da equipe te dê algum cargo.`
        const canal= member.guild.channels.cache.get(idcanal)
        canal.send(boasvindas)
        

});
//COMEÇO DA AGENDA-----------------------------------------------------------------------------------------------------------\\
const schedule = require('node-schedule');
const idcanalvoz1 = '741370039969775621' 
const idcanalvoz2 = '743530495685689454' 
const idcanalvoz3 = '743530541307002912' 

    var ent1 = schedule.scheduleJob('0 0 9 * * *', function(){
        const channel1 = client.channels.cache.get(idcanalvoz1);
        channel1.join().then(connection => { 
        const dispatcher = connection.play('./ding.mp3');
    dispatcher.on("finish", finish => { channel1.leave()});
    })
})
    var ent2 = schedule.scheduleJob('10 0 9 * * *', function(){
        const channel2 = client.channels.cache.get(idcanalvoz2);
        channel2.join().then(connection => { 
        const dispatcher2 = connection.play('./ding.mp3');
    dispatcher2.on("finish", finish => { channel2.leave()});
    })
})
    var ent3 = schedule.scheduleJob('20 0 9 * * *', function(){
        const channel3 = client.channels.cache.get(idcanalvoz3);
        channel3.join().then(connection => { 
        const dispatcher3 = connection.play('./ding.mp3');
    dispatcher3.on("finish", finish => { channel3.leave()});
    })
})
var alm1 = schedule.scheduleJob('0 0 12 * * *', function(){
    const channel1 = client.channels.cache.get(idcanalvoz1);
    channel1.join().then(connection => { 
    const dispatcher = connection.play('./ding.mp3');
dispatcher.on("finish", finish => { channel1.leave()});
})
})
var alm2 = schedule.scheduleJob('10 0 12 * * *', function(){
    const channel2 = client.channels.cache.get(idcanalvoz2);
    channel2.join().then(connection => { 
    const dispatcher2 = connection.play('./ding.mp3');
dispatcher2.on("finish", finish => { channel2.leave()});
})
})
var alm3 = schedule.scheduleJob('20 0 12 * * *', function(){
    const channel3 = client.channels.cache.get(idcanalvoz3);
    channel3.join().then(connection => { 
    const dispatcher3 = connection.play('./ding.mp3');
dispatcher3.on("finish", finish => { channel3.leave()});
})
})
var alm4 = schedule.scheduleJob('0 30 13 * * *', function(){
    const channel1 = client.channels.cache.get(idcanalvoz1);
    channel1.join().then(connection => { 
    const dispatcher = connection.play('./ding.mp3');
dispatcher.on("finish", finish => { channel1.leave()});
})
})
var alm5 = schedule.scheduleJob('10 30 13 * * *', function(){
    const channel2 = client.channels.cache.get(idcanalvoz2);
    channel2.join().then(connection => { 
    const dispatcher2 = connection.play('./ding.mp3');
dispatcher2.on("finish", finish => { channel2.leave()});
})
})
var alm6 = schedule.scheduleJob('20 30 13 * * *', function(){
    const channel3 = client.channels.cache.get(idcanalvoz3);
    channel3.join().then(connection => { 
    const dispatcher3 = connection.play('./ding.mp3');
dispatcher3.on("finish", finish => { channel3.leave()});
})
})
var sai1 = schedule.scheduleJob('0 30 16 * * *', function(){
    const channel1 = client.channels.cache.get(idcanalvoz1);
    channel1.join().then(connection => { 
    const dispatcher = connection.play('./ding.mp3');
dispatcher.on("finish", finish => { channel1.leave()});
})
})
var sai2 = schedule.scheduleJob('10 30 16 * * *', function(){
    const channel2 = client.channels.cache.get(idcanalvoz2);
    channel2.join().then(connection => { 
    const dispatcher2 = connection.play('./ding.mp3');
dispatcher2.on("finish", finish => { channel2.leave()});
})
})
var sai3 = schedule.scheduleJob('20 30 16 * * *', function(){
    const channel3 = client.channels.cache.get(idcanalvoz3);
    channel3.join().then(connection => { 
    const dispatcher3 = connection.play('./ding.mp3');
dispatcher3.on("finish", finish => { channel3.leave()});
})
})
//AGENDA ACABA AQUI---------------------------------------------------------------------------------------------------//
client.on('message', async (msg) => {

        if (msg.content.startsWith(config.prefix)){
        if (msg.author.bot) return

    const args = msg.content.split(" ")
    args.shift()


    const  commandSplited = msg.content.split(" ")[0]
    const  command = commandSplited.replace(/^./g,"")
    command.toLowerCase()
    console.log(command)

    try {
	    const  commandHandler = require(`./comandos/${command}`)
	    commandHandler.run(client, msg, args) 
    }
    catch {
        
	    msg.channel.send('comando inválido')
    } 
    }
}) 


