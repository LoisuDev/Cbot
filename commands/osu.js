const Discord = require('discord.js');

module.exports = {
  name: 'osu',
  description: 'Le profil de joueurs osu du serveur ! (Contactez la fonda pour y apparaître)',
  
  async execute(message, args) {
    if(!args.length) return message.channel.send('Veuillez préciser le joueur que vous souhaitez voir ! La liste des joueurs disponible se trouve avec %osu list');
    let nom = args.join(' ');
    if(nom === 'list') return message.channel.send('Liste des joueurs disponibles :\n- Azuuusa\n-Nanamiiiiiiiii');
    if(nom === 'Azuuusa') return message.channel.send('**Azuuuusa**\n**Type de jeu** : osu!Relax\n**Niveau moyen de jeu (en étoiles)** : 4~6,5');
    if(nom === 'Nanamiiiiiiiii') return message.channel.send('**Nanamiiiiiiiii**\n**Type de jeu** : osu!AutoPilot\n**Niveau moyen de jeu (en étoiles)** : 1~3');
  }
}
