const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = process.env.PREFIX;
const fs = require('fs');
const superagent = require('superagent');

bot.login(process.env.BOT_TOKEN);

bot.on('ready', async => {
    bot.user.setActivity("Rikka's week | %help", {type : "WATCHING"})
        .then(console.log(`${bot.user.username} est en ligne`))
        .catch(console.error());
});

bot.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(prefix)) return;


    let messageArray = message.content.split(" ");
    let command = messageArray[0].slice(prefix.length);
    let args = messageArray.slice(1);

    if(command === "help") {
        let help = new Discord.MessageEmbed()
            .setTitle("CabaneBot - Liste des commandes")
            .setThumbnail(bot.user.avatarURL())
            .setDescription("``help`` - *Affiche cette liste de commandes* \n``ping`` - *Une simple commande qui répond pong mdr*\n``presentation`` - *Présente-toi avec style sur le serveur*\n``8ball`` - *Pose une question, je te réponds*\n``clear`` - *Supprime des messages avec ça*\n``dis`` - *Je parle pour toi*\n``hug`` - *Câlin*\n``kiss`` - *Un petit bisou ? >.<*\n``poke`` - *Eh eh EHHHH*\n``slap``- *Méchant(e), je te tape*\n``sondage`` - *Est-ce que je suis la meilleure ? (Oui.)*\n``spank`` - *Vilaine personne, voilà ta punition*")
            .setFooter("help")
            .setTimestamp()
        message.channel.send(help);
    };

    if(command === "ping") {
        var ping = Date.now() - message.createdTimestamp + " ms";
        message.channel.send("Pong !\n`" + `${Date.now() - message.createdTimestamp}` + " ms`");
    }

    if(command === "presentation") {
        let prénom = args[0];
        let âge = args[1];
        let genre = args[2];
        let orientation = args[3];
        let anniversaire = args[4];
        let situation = args[5];
        let usericon = message.author.displayAvatarURL();
    
        if(!args[0] || !args[1] || !args[2] || !args[3] || !args[4] || !args[5] || args[0] == "help") {
            message.channel.send("Voici comment fonctionne la commande 'présentation' : ``<prefix>presentation prénom âge genre orientation_sexuelle date_anniversaire situation_amoureuse``");
            return message.channel.send("*Pour les arguments qui font plusieurs mots, comme la situation amoureuse ou le genre, Veuillez utiliser le tiret du 8 : '_'. Pour la date d'anniversaire, rentrez la sous ce format : ``JJ/MM/AAAA``.");
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

    if(command === "8ball") {
        if (!args[1]) return message.reply("Entrez une question !")

    let replies = ["Oui.", "Non.", "Peut-être."];
    let question = args.slice(0).join(" ");
    let res = Math.floor((Math.random() * replies.length));

    let ball8_embed = new Discord.MessageEmbed()
        .setColor('e410d3')
        .setAuthor(message.author.tag)
        .setTitle('8 Ball ♥')
        .setTimestamp()
        .setThumbnail(message.author.avatarURL())
        .addField('Question :', question)
        .addField("Réponse :", replies[res]);
    
    message.channel.send(ball8_embed);
    }
    if(command === "clear") {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) 
        return message.channel.send("Senpai, vous n'avez pas le droit de faire ça >.< ♥")
        if (!args[0])
        return message.channel.send("Senpai, voici comment on supprime des messages >.< ♥ : ``<prefix>clear <nbr de msg à clear>``");

        message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Senpai, j'ai supprimé **__${args[0]} messages__** rien que pour vous. >///< ♥`);
        })
        message.delete();
    }
    if(command === "dis") {
        let arguments = args.join(" ");
            message.delete().catch();
            message.channel.send(arguments);
    }

    if(command === "hug") {
        let { body } = await superagent.get(`https://nekos.life/api/v2/img/hug`)
        const member = message.mentions.members.first();
        if (!args[0]) return message.channel.send("Senpai, veuillez mentionner un utilisateur ! >.> ♥")
        if (!member) return message.channel.send("Senpai, vous devez mentionner, pas écrire le nom de la personne >.>")
        let membre = member.displayName;
        var hug_embed = new Discord.MessageEmbed()
            .setColor("e410d3")
            .setTimestamp()
            .setTitle(`${message.author.username} fait un câlin à ${membre}`)
            .setImage(body.url)
        message.channel.send(hug_embed);
    }

    if(command === "kiss") {
        let { body } = await superagent.get(`https://nekos.life/api/v2/img/kiss`)
        const member = message.mentions.members.first();
        if (!args[0]) return message.channel.send("Senpai, veuillez mentionner un utilisateur ! >.> ♥")
        if (!member) return message.channel.send("Senpai, vous devez mentionner, pas écrire le nom de la personne >.>")
        let membre = member.displayName;
        var kiss_embed = new Discord.MessageEmbed()
            .setColor("e410d3")
            .setTimestamp()
            .setTitle(`${message.author.username} fait un bisou à ${membre}`)
            .setImage(body.url)
        message.channel.send(kiss_embed);
    }
    
    if(command === "poke") {
        let { body } = await superagent.get(`https://nekos.life/api/v2/img/poke`)
        const member = message.mentions.members.first();
        if (!args[0]) return message.channel.send("Senpai, veuillez mentionner un utilisateur ! >.> ♥")
        if (!member) return message.channel.send("Senpai, vous devez mentionner, pas écrire le nom de la personne >.>")
        let membre = member.displayName;
        var poke_embed = new Discord.MessageEmbed()
        .setColor("e410d3")
        .setTimestamp()
        .setTitle(`${message.author.username} donne un petit coup à ${membre}`)
        .setImage(body.url)
        message.channel.send(poke_embed);
    }

    if(command === "slap") {
        let { body } = await superagent.get(`https://nekos.life/api/v2/img/slap`)
        const member = message.mentions.members.first();
        if (!args[0]) return message.channel.send("Senpai, veuillez mentionner un utilisateur ! >.> ♥")
        if (!member) return message.channel.send("Senpai, vous devez mentionner, pas écrire le nom de la personne >.>")
        let membre = member.displayName;
        var slap_embed = new Discord.MessageEmbed()
        .setColor("e410d3")
        .setTimestamp()
        .setTitle(`${message.author.username} donne une gifle à ${membre}`)
        .setImage(body.url)
        message.channel.send(slap_embed);
    }

    if(command === "sondage") {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.channel.send("Senpai, vous n'avez pas le droit de faire ça >.>");
        }
        if (!args[0]) return message.channel.send ("Senpai, veuillez entrer la question du sondage ! >.> ♥")
    
        let sondage_embed = new Discord.MessageEmbed()
            .setTitle(`Sondage créé par : ${message.author.username} ♥`)
            .setColor('e410d3')
            .setThumbnail(message.author.avatarURL())
            .setFooter('Répondez en appuyant sur les réactions ci-dessous')
            .setDescription(args.join(' '));
        
        let msg = await message.channel.send(sondage_embed);
        await msg.react('✅');
        await msg.react('❌');
    }

    if(command === "spank") {
        let { body } = await superagent.get(`https://nekos.life/api/v2/img/spank`)
        const member = message.mentions.members.first();
        if (!args[0]) return message.channel.send("Senpai, veuillez mentionner un utilisateur ! >.> ♥")
        if (!member) return message.channel.send("Senpai, vous devez mentionner, pas écrire le nom de la personne >.>")
        let membre = member.displayName;
        var spank_embed = new Discord.MessageEmbed()
        .setColor("e410d3")
        .setTimestamp()
        .setTitle(`${message.author.username} donne une fessée à ${membre}`)
        .setImage(body.url)
        message.channel.send(spank_embed);
    }
});
