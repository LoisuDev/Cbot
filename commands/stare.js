const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: 'stare',
  aliases: ['fixer', 'mater'],
  description: 'Fixez quelqu\'un ou alors juste envoyez un gif de ça dans le chat !',
  
  async execute(message, args) {
    let member = message.mentions.members.first();
    let { body } = await superagent.get(`https://api.miki.bot/images/random?tags=stare`);
    if(!member) return message.channel.send(body.url);
    
    let hug_embed = new Discord.MessageEmbed()
      .setColor('e410d3')
      .setTitle(`${message.author.username} mate ${member.displayName}`)
      .setImage(body.url)
      .setFooter('stare')
      .setTimestamp()
    message.channel.send(hug_embed);
  }
}
