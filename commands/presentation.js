const Discord = require('discord.js');

module.exports = {
  name: "presentation",
  description: "Présentation !",
  usage: 'Tapez %presentation help pour connaître le fonctionnement de la commande',
  execute(message, args) {
        let blbl = args.join(' ').split('%')
        let prénom = blbl[0];
        let âge = blbl[1];
        let genre = blbl[2];
        let orientation = blbl[3];
        let anniversaire = blbl[4];
        let situation = blbl[5];
        let usericon = message.author.displayAvatarURL();
    
         if(!blbl[0] || !blbl[1] || !blbl[2] || !blbl[3] || !blbl[4] || !blbl[5] || blbl[0] == "help") {
            return message.channel.send("Voici comment fonctionne la commande 'présentation' : ``%presentation prénom%âge%genre%orientation sexuelle%date d'anniversaire%situation amoureuse``");
         } 
    
    
        let presentation_embed = new Discord.MessageEmbed()
            .setColor('e410d3')
            .setAuthor(message.author.username)
            .setDescription("Présentation ♥")
            .addField('Prénom', prénom)
            .addField('Genre', genre)
            .addField('Âge', âge)
            .addField('Orientation sexuelle', orientation)
            .addField('Anniversaire', anniversaire)
            .addField('Situation amoureuse', situation)
            .setThumbnail(usericon)
            .setTimestamp()
            .setFooter("presentation")
        message.channel.send(presentation_embed);
    }
}
