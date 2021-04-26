const Discord = require('discord.js');

module.exports = {
  name: 'say',
  aliases: ['dis'],
  description: 'Vous me faites dire ce que vous voulez (bon pas de trucs méchants hein !)',
  
  async execute(message, args) {
    message.channel.send(args.length);
    message.delete();
  }
}
