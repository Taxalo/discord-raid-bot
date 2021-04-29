const fs = require('fs');
const Discord = require('discord.js');
const discordAuth = require('./auth.json');
const client = new Discord.Client();
const prefix = discordAuth.prefix;

client.cmds = new Discord.Collection();
client.cooldowns = new Discord.Collection();
fs.readdirSync('./commands').forEach(f => {
    const command = require(`./commands/${f}`);
    client.cmds.set(command.name, command);
});

client.on('ready', () => {
    console.log("Logeado como \x1b[33m" + `${client.user.tag}`);
    client.user.setActivity('chipiron.es', {
        type: 'PLAYING'
    })
        .then(() => console.log("Setteada actividad del BOT"))
        .catch((err) => console.log(err));

});

client.on("message", async message => {

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!message.content.startsWith(prefix) || (message.author.bot) || (message.content.indexOf(prefix) !== 0)) return;

    const command = client.cmds.get(commandName) || client.cmds.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    try {
        await command.execute(message, args);
    } catch (error) {
        console.error(error);
    }

});

client.login(discordAuth.token)
    .then(() => console.log("BOT LOGGEADO"))
    .catch((err) => console.log(err));
