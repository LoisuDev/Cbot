const Discord = require('discord.js');

module.exports = {
  name: "clear",
  description: "clear !",
  execute(message, args) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) 
        return message.channel.send("Senpai, vous n'avez pas le droit de faire ça >.< ♥")
        if (!args[0])
        return message.channel.send("Senpai, voici comment on supprime des messages >.< ♥ : ``<prefix>clear <nbr de msg à clear>``");

        message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Senpai, j'ai supprimé **__${args[0]} messages__** rien que pour vous. >///< ♥`);
        })
        message.delete();
  }
}
