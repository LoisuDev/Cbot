const Discord = require('discord.js');

module.exports = {
  name: 'invite',
  description: 'Returns a link to invite Sotoka in your server.',
  usage: '%invite',
  
  async execute (bot, message, args) {
    return message.channel.send('https://discord.com/api/oauth2/authorize?client_id=828715499894079488&permissions=8&scope=bot')
  }
}
