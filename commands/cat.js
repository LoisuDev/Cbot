const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: "cat",
  aliases: ["meow"],
  description: "returns a cat pic/gif.",
  usage: "%cat",
  
  async execute (bot, message, args) {
    let { body } = await superagent.get(`https://api.thecatapi.com/v1/images/search`)
    
    let embed = new Discord.MessageEmbed()
      .setColor('e410d3')
      .setTitle('Meow!')
      .setImage(body.url)
      .setFooter('cat')
      .setTimestamp()
    return message.channel.send(embed);
  }
}
