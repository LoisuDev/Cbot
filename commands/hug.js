const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: 'hug',
  aliases: ['câlin', 'calin'],
  description: 'Faites un câlin à quelqu\'un ou alors juste envoyez un gif de câlin dans le chat !',
  
  run: async (message, args) => {
    let member = message.mentions.members.first();
    let { body } = await superagent.get(`https://nekos.life/api/hug`);
    if(!member) return message.channel.send(body.url);
    
    let hug_embed = new Discord.MessageEmbed();
      .setColor('e410d3')
      .setTitle(`${message.author.username} fait un câlin à ${member.displayName}`)
      .setImage(body.url)
      .setFooter('hug')
      .setTimestamp()
    message.channel.send(hug_embed);
  }
}
