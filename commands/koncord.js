const Discord = require('discord.js');

module.exports = {
  name: 'koncord',
  description: 'The K-On Discord',
  usage: '%koncord',
  
  async execute(message, args) {
    message.channel.send('Here\'s the link of the K-On Discord server ❤️ :\nhttps://discord.gg/kon')
  }
}
