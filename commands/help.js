const Discord = require('discord.js');

module.exports = {
  name: "help",
  aliases: ['aide'],
  description: "Une liste des commandes disponibles !",
  
  execute(message, args) {
    const data = [];
    const { commands } = message.bot;
    
    if(!args.length) {
      data.push('Voici une liste de toutes mes commandes :\n');
      data.push(commands.map(command => command.name).join(', '));
      data.push('\nVous pouvez taper %help <Nom de la commande> pour obtenir plus d\'informations sur une commande !')
      
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
    
    message.channel.send(data, { split: true });
    
    
  }
}
