const Discord = require('discord.js');

module.exports = {
  name: 'say',
  aliases: ['dis'],
  description: 'Vous me faites dire ce que vous voulez (bon pas de trucs méchants hein !)',
  usage: '%say <ce que vous voulez me faire dire>',
  
  async execute(message, args) {
    let msg = args.join(' ');
    message.channel.send(msg);
    message.delete();
  }
}
