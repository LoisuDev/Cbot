/* Work in Progress */
const Discord = require('discord.js');

module.exports = {
  name: 'anime',
  description: 'Get informations about an anime. Type %anime list to see the list of the animes available.',
  usage: '%anime <anime you want to look at> \n%anime list',
  
  async execute(message, args) {
    let anime = args.join(" ");
    if(!args.length) {return message.channel.send('Invalid arguments provided. ERR 01\n**Please provide an anime name! Type %anime list if you don\'t know what to search!**')}
    
    if(anime === "list") {
      return message.channel.send('**Here is the list of the animes available:**\n- K-On! \n\nIf you wanna request an anime, please contact Sotoka-Chan#1111 on Discord!')
    };
    
    if(anime === "K-On!") {
      let embed = new Discord.MessageEmbed()
        .setColor('e410d3')
        .setTitle('K-On! (Season 1)')
        .setDescription("Hirasawa Yui, a young, carefree girl entering high school, has her imagination instantly captured when she sees a poster advertising the ‘Light Music Club’. Being the carefree girl that she is, she quickly signs up. However, Yui has a problem, she is unable to play an instrument.\n\nWhen Yui goes to the clubroom to explain, she's greeted by the other members: Ritsu, Mio and Tsumugi. Although disheartened at Yui’s lack of musical know-how, they still try to convince her to stay to prevent the club’s disbandment. After playing Yui a short piece which re-ignites her imagination, they succeed in keeping their new member and guitarist.\n\nAlong with the tasks of school and homework, Yui begins to learn the guitar with the help of the other band members, experiencing many mishaps along the way. However, with the school-festival drawing near and Yui getting stuck with her practice, will the Light Music Club be ready in time for their debut?")
      .addField('Studio', 'Kyoto Animation')
      .addField('Episodes', '13 x 24 mins')
      .addField('Status', 'Finished')
      .addField('Average Score', '78%')
      .setThumbnail('https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx5680-Xh6B67KuZ2PU.png')
      .setFooter('Source: Anilist')
      .setTimestamp()
     return message.channel.send(embed)
    }
    
    return message.channel.send('This anime doesn\'t exist or is not on the list! Please type %anime list to see the list.')
  }
}
