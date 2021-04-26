const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: 'kiss',
  aliases: ['bisou'],
  description: 'Faites un bisou à quelqu\'un ou alors juste envoyez un gif de bisou dans le chat !',
  
  async execute(message, args) {
    let member = message.mentions.members.first();
    let { body } = await superagent.get(`https://nekos.life/api/kiss`);
    if(!member) return message.channel.send(body.url);
    
    let hug_embed = new Discord.MessageEmbed()
      .setColor('e410d3')
      .setTitle(`${message.author.username} fait un bisou à ${member.displayName}`)
      .setImage(body.url)
      .setFooter('kiss')
      .setTimestamp()
    message.channel.send(hug_embed);
  }
}
