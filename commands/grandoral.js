const Discord = require('discord.js');

module.exports = {
  name: 'grandoral',
  description: 'Commande destinée à aider Loïs dans ses révisions pour le grand oral.',
  usage: '%grandoral <spécialité>%[partie]',
  
  async execute(message, args) {
    let argument = args.join(' ').split('%');
    let spé = argument[0];
    let partie = argument[1];
    
    if(!args.length) return message.channel.send('Invalid arguments provided. ERR 01');
    
    if(spé === "histoire") {
      if(!partie) {
        return message.channel.send('Voici la liste des parties disponibles pour la spé histoire :\n- Intro')
      }
      if(partie === 'intro') {
        return message.channel.send("Comme vous le savez, en ce moment dans l’actualité, on parle beaucoup de l’espace, avec le décollage de notre astronaute Thomas Pesquet vers la Station Spatiale Internationale, plus communément appelée ISS.\nÉtant passionnée d’espace, j’ai décidé de m’intéresser à cette station, puisqu’elle rentre dans l’axe 1 concernant les enjeux de la connaissance, au programme de la spécialité Histoire-Géographie, Géopolitique et Sciences Politiques.\nMa problématique est donc la suivante :  comment l’ISS repousse les limites de notre connaissance et pourquoi cela attire les entreprises privées ?\nPour répondre à cette dernière, nous allons procéder en trois parties. Tout d’abord, nous verrons le contexte de la construction de l’ISS et les raisons de la formation d’un tel projet. Ensuite, nous aborderons les apports de cette station orbitale dans nos sociétés, et notamment dans la recherche scientifique. Enfin, nous analyserons l’arrivée des entreprises privées dans le domaine spatial et comment elles ont fait évoluer le projet.")
      }
    }
  }
}
