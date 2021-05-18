const Discord = require('discord.js');

module.exports = {
  name: 'top',
  description: 'Top 10 des animes et des personnages d\'animés de Loïs.',
  usage: '%top',
  
  async execute(message, args) {
    let anime = new Discord.MessageEmbed()
      .setTitle('Top 10 des animes')
      .setDescription('Une petite liste des animés qui ont fait craquer Loïs !')
      .addField('1. K-On!!', 'Note : 100/100')
      .addField('2. Hitoribocchi no Marumaru Seikatsu', 'Note : 97/100')
      .addField('3. Tenki no ko', 'Note : 96/100')
      .addField('4. Chuunibyou demo koi ga shitai! Ren', 'Note: 96/100')
      .addField('5. Kimi no na wa.', 'Note : 93/100')
      .addField('6. Absolute Duo', 'Note : 91/100')
      .addField('7. Clannad: After Story', 'Note : 90/100')
      .addField('8. Kanon 2006', 'Note : 84/100')
      .addField('9. Violet Evergarden', 'Note : 80/100')
      .addField('10. Toradora!', 'Note: 74/100')
      .setImage('https://4kwallpaper.wiki/wp-content/uploads/2019/08/384741.jpg')
      .setFooter('animes')
      .setTimestamp()
    
    let perso = new Discord.MessageEmbed()
      .setTitle('Top 10 des personnages')
      .setDescription('Une petite liste des personnages qui ont fait craquer Loïs !')
      .addField('1. Azusa Nakano', 'Anime : K-On')
      .addField('2. Sunao Nako', 'Anime : Hitoribocchi no Marumaru Seikatsu')
      .addField('3. Hitori Bocchi', 'Anime : Hitoribocchi no Marumaru Seikatsu')
      .addField('4. Amano Hina', 'Anime : Tenki no ko')
      .addField('5. Shiina Mashiro', 'Anime : Sakurasou no pet na kanojo')
      .addField('6. Okazaki Ushio', 'Anime : Clannad')
      .addField('7. Kurai Kako', 'Anime : Hitoribocchi no Marumaru Seikatsu')
      .addField('8. Kawasumi Mai', 'Anime : Kanon 2006')
      .addField('9. Aisaka Taiga', 'Anime : Toradora!')
      .addField('10. Doma Umaru', 'Himouto! Umaru-Chan')
      .setImage('https://cdn.discordapp.com/attachments/768482870489645097/844217863208173628/final.jpg')
      .setFooter('persos')
      .setTimestamp()
    
   await message.channel.send(anime);
   await message.channel.send(perso)
   
  }
}
