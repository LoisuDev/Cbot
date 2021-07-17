const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: "cat",
  aliases: ["meow"],
  description: "returns a cat pic/gif.",
  usage: "%cat",
  
  async execute (message, args) {
    let [{ body }] = await superagent.get(`https://api.thecatapi.com/v1/images/search`)
    
    let embed = new Discord.MessageEmbed()
      .setColor('e410d3')
      .setTitle('Meow!')
      .setImage(`https://cdn2.thecatapi.com/images/${body.id}`)
      .setFooter("cat")
      .setTimestamp()
    return message.channel.send(embed);
  }
}
