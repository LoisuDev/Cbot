const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: 'tickle',
  aliases: ['chatouiller'],
  
  async execute(message, args) {
    let member = message.mentions.users.first();
    if(message.author.id === "573426170289455154" && member.id === "655605141046820884") return message.channel.send(`C'est dommage, ${message.author.tag}... Pour une raison inconnue, tu ne peux pas faire ça...`)
    if(member.id === "655605141046820884") return message.channel.send("Sorry, for some reason, you can\'t do that...")
    let { body } = await superagent.get(`https://shiro.gg/api/images/tickle`);
    if(!args.length) return message.channel.send(body.url);
    
    let hug_embed = new Discord.MessageEmbed()
      .setColor('e410d3')
      .setTitle(`${message.author.username} tickles ${member.displayName}`)
      .setImage(body.url)
      .setFooter('tickle')
      .setTimestamp()
    message.channel.send(hug_embed);
  }
}
