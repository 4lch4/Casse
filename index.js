const config = require('./config.json')
const bot = new (require('eris'))(config.token)
bot.on('ready', () => {
  console.log(`Ready to show some love.`)
})

bot.on('messageCreate', msg => {
  if (msg.content.startsWith(config.prefix)) {
    const text = msg.content.slice(config.prefix.length).split(' ')[0]
    console.log(`text = ${text}`)
    if (text === 'fuckyou') {
      if (msg.mentions.length === 0) bot.createMessage(msg.channel.id, 'I love <@358668172955615243>')
      else bot.createMessage(msg.channel.id, `I love <@${msg.mentions[0].id}>`)
    } else if (text === 'invite') {
      bot.createMessage(msg.channel.id, 'https://discordapp.com/oauth2/authorize?client_id=384943710321770497&scope=bot')
    }
  }
})

bot.connect()
