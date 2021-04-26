const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: 'slap',
  aliases: ['taper'],
  description: 'Tapez quelqu\'un ou alors juste envoyez un gif de quelqu\'un qui tape dans le salon !',
  
  async execute(message, args) {
    let member = message.mentions.members.first();
    let { body } = await superagent.get(`https://shiro.gg/api/images/slap`);
    if(!member) return message.channel.send(body.url);
    
    let hug_embed = new Discord.MessageEmbed()
      .setColor('e410d3')
      .setTitle(`${message.author.username} tape ${member.displayName}`)
      .setImage(body.url)
      .setFooter('slap')
      .setTimestamp()
    message.channel.send(hug_embed);
  }
}
