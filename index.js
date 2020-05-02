// Node Modules
const Discord = require("discord.js");

// Discord Bot
const client = new Discord.Client();

// Configuration File
const config = require(`./config.json`);

// SAGe Modules
require(`./modules/EventHandler`)(client);
require(`./modules/logger`)(client);
require(`./modules/emoji`)(client);


// Command Handler
const { CommandHandler } = require('./modules/CommandHandler');
const CH = new CommandHandler({
    folder: __dirname + "/commands/",
    prefix: [config.prefix]
});

// Command System
client.on("message", message => {
    if (message.channel.type === `dm`) return;
    if (message.author.bot == true) return;

    let permlevel;
    let modrole = message.guild.roles.cache.get(`678274231821402113`)

    // Permission Levels System
    if (message.author.id == config.devid[0]) {
        permlevel = 5
    } else if (message.author.id == message.guild.owner.id) {
        permlevel = 4
    } else if (message.member.roles.cache.has(`678274231821402113`) || message.member.permissions.has('ADMINISTRATOR')) {
        permlevel = 3
    } else if (message.member.roles.cache.has(`678274231821402113`) || message.member.roles.highest.position >= modrole.position) {
        permlevel = 2
    } else {
        permlevel = 1
    }

    let args = message.content.split(" ");

    let command = args[0];

    let cmd = CH.getCommand(config.prefix, `${command.toLowerCase()}`)
    if (!cmd) return;

    if (message.author.id == client.user.id) return;

        if (cmd.permlevel > permlevel) {
            return message.channel.send(`Fuck off, you aren't important enough to run this command. Maybe if you keep rank sucking you'll get there.`)
        }

        cmd.run(client, message, args);
})

// Exports
module.exports = {
    CH: CH,
    client: client,
}
// Login System
client.login(config.token);