const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const prefix = process.env.PREFIX;
const fs = require('fs');
const superagent = require('superagent');
const disbut = require('discord-buttons');
disbut(bot);

bot.login(process.env.BOT_TOKEN);

bot.on('ready', async => {
    bot.user.setActivity("%help", {type : "WATCHING"})
        .then(console.log(`${bot.user.username} est en ligne`))
        .catch(console.error());
});

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command);
}


bot.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(prefix)) return;


    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = bot.commands.get(commandName)
    	|| bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) return;
	
	try {
	command.execute(bot, message, args);
	} catch (error) {
	console.error(error);
	message.reply('there was an error trying to execute that command!');
	}
});
