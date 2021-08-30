const Discord = require('discord.js');

module.exports = {
  name: "help",
  aliases: ['aide'],
  description: "A list of my commands!",
  usage: '%help (<command>)',
  
  execute(bot, message, args) {
    const data = [];
    const { commands } = message.client;
    
    if(!args.length) {
      data.push('Here is a list of my commands :\n');
      data.push(commands.map(command => command.name).join(', '));
      data.push('\nYou can type %help <command> to get more infos for a specific command!')
      
      return message.channel.send(data, { split: true })
    };
    
    const name = args[0].toLowerCase();
    const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

    if (!command) {
	  return message.reply('that\'s not a valid command!');
    }

    data.push(`**Name:** ${command.name}`);
    

    if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
    if (command.description) data.push(`**Description:** ${command.description}`);
    if (command.usage) data.push(`**Usage:** ${command.usage}`);
    if (command.permissions) data.push(`**Permissions required:** ${command.permissions.join(', ')}`);
    
    message.channel.send(data, { split: true });
    
    
  }
}
