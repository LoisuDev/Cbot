const Discord = require('discord.js');

module.exports = {
  name: 'osu',
  description: 'Le profil de joueurs osu du serveur ! (Contactez la fonda pour y apparaître)',
  usage: '%osu <nom du joueur>. En cas d\'espace dans le pseudo, tapez "%20" à la place de l\'espace.',
  
  async execute(message, args) {
    if(!args.length) return message.channel.send('Veuillez préciser le joueur que vous souhaitez voir !');
    let nom = args.join(' ');
    message.channel.send(`http://lemmmy.pw/osusig/sig.php?colour=pink&uname=${nom}&pp=0&onlineindicator=undefined`)
    
  }
}
