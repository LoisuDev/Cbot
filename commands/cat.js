const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: "cat",
  aliases: ["meow"],
  description: "returns a cat pic/gif.",
  usage: "%cat",
  
  async execute (message, args) {
    let { body } = await superagent.get(`https://aws.random.cat/meow`)
    
    message.channel.send('Meow!')
    return message.channel.send(body.file);
  }
}
