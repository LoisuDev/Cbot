const Discord = require('discord.js');

module.exports = {
  name: 'koncord',
  description: 'The K-On Discord',
  usage: '%koncord',
  
  async execute(message, args) {
    let button = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('K-On! Discord Server')
      .setURL('https://discord.gg/kon')
    message.channel.send('Here\'s the link of the K-On Discord server ❤️ :', button)
  }
}
