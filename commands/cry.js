const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: 'cry',
  aliases: ['pleurer', 'sad', 'triste'],
  description: 'Vous êtes triste ?!',
  
  async execute(message, args) {
    let member = message.mentions.members.first();
    let { body } = await superagent.get(`https://shiro.gg/api/images/cry`);
    if(!member) return message.channel.send(body.url);
    
    let hug_embed = new Discord.MessageEmbed()
      .setColor('e410d3')
      .setTitle(`${message.author.username} pleure à cause de ${member.displayName}`)
      .setImage(body.url)
      .setFooter('cry')
      .setTimestamp()
    message.channel.send(hug_embed);
  }
}
