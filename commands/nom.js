const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: 'nom',
  aliases: ['manger'],
  description: 'Vous avez faim, à ce que je vois',
  
  async execute(message, args) {
    let { body } = await superagent.get(`https://shiro.gg/api/images/nom`);
    let hug_embed = new Discord.MessageEmbed()
      .setColor('e410d3')
      .setTitle(`${message.author.username} a faim !`)
      .setImage(body.url)
      .setFooter('nom')
      .setTimestamp()
    message.channel.send(hug_embed);
  }
}
