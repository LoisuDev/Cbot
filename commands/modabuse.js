const Discord = require('discord.js');
const disbut = require('discord-buttons');

module.exports = {
  name: 'modabuse',
  description: 'MOD POWER',
  
  
  async execute (message, args) {
    if(!message.author.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send('you can\'t do that.')
    }
    let button = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Watch our rights')
      .setURL('shorturl.at/nrJV1')
    return message.channel.send('Watch admins rights by clicking the button below.\nhttps://media1.tenor.com/images/78d61511dfa9d3e174dd9978528f7ca3/tenor.gif?itemid=17248464', button)
  }
}
