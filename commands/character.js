const Discord = require('discord.js');

module.exports = {
  name: 'character',
  aliases: ['perso', 'personnage'],
  description: 'Fournit une image ainsi que des informations de base sur le personnage.\n``%character list`` vous donnera la liste des personnages disponibles.\nPour avoir votre personnage dans la liste, contactez l\'équipe de développement.',
  
  async execute(message, args) {
    let nom = args.join(' ');
    if(!nom) nom = 'list';
    if(nom === 'list') {
      let liste1_embed = new Discord.MessageEmbed()
        .setTitle('Liste des personnages disponibles')
        .setDescription('Contactez un développeur si vous souhaitez voir votre personnage dans la liste.')
        .addField('K-on!', 'Azusa Nakano, Yui Hirasawa, Mio Akiyama, Tsumugi Kotobuki, Ritsu Tainaka')
        .setFooter('character list')
        .setImage()
        .setTimestamp()
      return message.channel.send(liste1_embed);
    }
    
    if(nom === "Azusa Nakano") {
      let nakanoazusa = new Discord.MessageEmbed()
        .setTitle('Azusa Nakano (K-On!)')
        .setDescription('Informations sur le personnage')
        .addField('Anniversaire', '11 novembre')
        .addField('Signe astro', 'Scorpion')
        .addField('Taille/Poids', '1,50m / 46kgs')
        .addField('Groupe Sanguin', 'AB')
        .setThumbnail('https://s4.anilist.co/file/anilistcdn/character/large/b21173-0RB5dOJdGt9y.png')
        .setFooter('character')
        .setTimestamp()
      return message.channel.send(nakanoazusa);
    }
    if(nom === "Yui Hirasawa") {
      let hirasawayui = new Discord.MessageEmbed()
        .setTitle('Yui Hirasawa (K-On!)')
        .setDescription('Informations sur le personnage')
        .addField('Anniversaire', '27 novembre')
        .addField('Signe astro', 'Sagittaire')
        .addField('Taille/Poids', '1,56m / 50kgs')
        .addField('Groupe Sanguin', 'O')
        .setThumbnail('https://s4.anilist.co/file/anilistcdn/character/large/b19565-7gMiEAm7NGNK.png')
        .setFooter('character')
        .setTimestamp()
      return message.channel.send(hirasawayui);
    }
    if(nom === "Mio Akiyama") {
      let akiyamamio = new Discord.MessageEmbed()
        .setTitle('Mio Akiyama (K-On!)')
        .setDescription('Informations sur le personnage')
        .addField('Anniversaire', '15 Janvier')
        .addField('Signe astro', 'Capricorne')
        .addField('Taille/Poids', '1,60m / 54kgs')
        .addField('Groupe Sanguin', 'A')
        .setThumbnail('https://s4.anilist.co/file/anilistcdn/character/large/b19566-XKsMgf370b4m.png')
        .setFooter('character')
        .setTimestamp()
      return message.channel.send(akiyamamio);
    }
    if(nom === "Tsumugi Kotobuki") {
      let moog = new Discord.MessageEmbed()
        .setTitle('Tsumugi Kotobuki (K-On!)')
        .setDescription('Informations sur le personnage')
        .addField('Anniversaire', '2 juillet')
        .addField('Signe astro', 'Cancer')
        .addField('Taille/Poids', '1,57m / 53kgs')
        .addField('Groupe Sanguin', 'O')
        .setThumbnail('https://s4.anilist.co/file/anilistcdn/character/large/b19568-pF5UBfB6U8G2.png')
        .setFooter('character')
        .setTimestamp()
      return message.channel.send(moog);
    }
    if(nom === "Ritsu Tainaka") {
      let drummergirl = new Discord.MessageEmbed()
        .setTitle('Ritsu Tainaka (K-On!)')
        .setDescription('Informations sur le personnage')
        .addField('Anniversaire', '21 août')
        .addField('Signe astro', 'Lion')
        .addField('Taille/Poids', '1,54m / 48kgs')
        .addField('Groupe Sanguin', 'B')
        .setThumbnail('https://s4.anilist.co/file/anilistcdn/character/large/b19567-ztMNJBxTNqmZ.png')
        .setFooter('character')
        .setTimestamp()
      return message.channel.send(drummergirl);
    }
  }
}
