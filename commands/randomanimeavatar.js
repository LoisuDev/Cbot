const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: 'randomanimeavatar',
  aliases: ['animeavatar', 'raa'],
  description: 'Vous êtes en panne d\'inspi pour votre avatar ? C\'est cadeau !',
  
  async execute(message, args) {
    let { body } = await superagent.get(`https://nekos.life/api/v2/img/avatar`)
    
    let embed = new Discord.MessageEmbed()
      .setTitle('Senpai, voici un avatar !')
      .setImage(body.url)
      .setFooter('random anime avatar')
      .setTimestamp()
    
    message.channel.send(embed)
  }
}
