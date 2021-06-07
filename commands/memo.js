const Discord = require('discord.js');

module.exports = {
  name: 'memo',
  description: 'Commande pour mémoriser le grand oral.',
  usage: '%memo <spécialité>',
  
  async execute (message, args) {
    if(!args.length) return message.channel.send('Invalid arguments provided. ERR 01');
    
    let spécialité = args.join(' ');
    if(spécialité === "histoire") {
      message.reply('voici le mémo de la problématique en spé histoire pour Loïs :');
      return message.channel.send('**__I. Construction__**\nReagan 1984\nPaix\nMédocs\nRussie pb financiers\nHommes ->2000\n\n**__II. Apports__**\nCorps humain\nSanté\nClimatologie\Éducation\n\n**__III. Entreprises privées__**\nSauveurs\nColumbia 2003\nAide financière et matérielle\nMars\nIntérêt ISS')
    }
  }
}
