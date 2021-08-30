const Discord = require('discord.js');


module.exports = {
  name: 'support',
  description: 'Pings the staff for help. ATTENTION This only works on Loisu Tea Time server!',
  usage: '%support <reason>',
  
  async execute (bot, message, args) {
    let staffchannel = bot.channels.cache.find(channel => channel.id === '860998679560978483');
 
    /* If the message is not sent in Loisu Tea Time, it will return this */
    if(!message.channel.id === '860693183149899826') return message.channel.send('You can\'t do that. ERR 03 - Wrong server.')
    
    /* Let's get the message of the user */
    let reason = args.join(" ");
    
    /* if no reason, we just return an error message. */
    if(!args.length) return message.channel.send('Invalid arguments provided. ERR 01')
    
    /* Now we need to embed the message to be sent in #staff-discussion */
    let embed = new Discord.MessageEmbed()
      .setColor('e410d3')
      .setTitle('Support Request')
      .setAuthor(message.author.tag)
      .setDescription('That person asked for help')
      .addField('Channel', message.channel.name)
      .addField('Date', message.createdAt)
      .addField('reason', reason)
      .setFooter('support')
      .setTimestamp()
    
    await message.delete();
    await message.channel.send(`<@${message.author.id}>, thanks for asking support. **A staff member will help you as soon as possible!**`);
    await staffchannel.send('<@&875678695539499059>');
    await staffchannel.send(embed);
    
  }
}
