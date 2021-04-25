const Discord = require('discord.js');
const bot = new Discord.Client();
client.commands = new Discord.Collection();
const prefix = process.env.PREFIX;
const fs = require('fs');
const superagent = require('superagent');

bot.login(process.env.BOT_TOKEN);

bot.on('ready', async => {
    bot.user.setActivity("New %osuskin | %help", {type : "WATCHING"})
        .then(console.log(`${bot.user.username} est en ligne`))
        .catch(console.error());
});

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}


bot.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(message.content === "T'es sympa"){ message.reply('Cool ta vie. :sweat_smile:'); message.react('👌')};
    if(!message.content.startsWith(prefix)) return;


    let messageArray = message.content.split(" ");
    let command = messageArray[0].slice(prefix.length);
    let args = messageArray.slice(1);

    if (!client.commands.has(command)) return;

	try {
	client.commands.get(command).execute(message, args);
	} catch (error) {
	console.error(error);
	message.reply('there was an error trying to execute that command!');
	}
});
