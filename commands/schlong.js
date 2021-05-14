const Discord = require('discord.js');

module.exports = {
  name: 'schlong',
  aliases: ['bite', 'chibre'],
  description: 'J\'AI MIS MA BITE SUR UN PINS',
  usage: '%schlong',
  
  async execute(message, args) => {
    return message.channel.send('https://www.youtube.com/watch?v=_Oz6nvkLyvY');
  }
}
