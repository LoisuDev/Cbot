
const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: 'pout',
  aliases: ['bouder'],
  description: 'Boudez à quelqu\'un ou alors juste envoyez un gif de quelqu\'un qui boude dans le chat !',
  
  async execute(message, args) {
    let member = message.mentions.members.first();
    let { body } = await superagent.get(`https://shiro.gg/api/images/pout`);
    if(!member) return message.channel.send(body.url);
    
    let hug_embed = new Discord.MessageEmbed()
      .setColor('e410d3')
      .setTitle(`${message.author.username} boude à ${member.displayName}`)
      .setImage(body.url)
      .setFooter('pout')
      .setTimestamp()
    message.channel.send(hug_embed);
  }
}
