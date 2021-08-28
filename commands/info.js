const Discord = require('discord.js');
const disbut = require('discord-buttons');

module.exports = {
  name: 'info',
  description: 'Gives informations about the bot.',
  usage: '%info',
  
  async execute (message, args) {
    return message.channel.send('That command is a WIP. Please try again later!');
  }
}
