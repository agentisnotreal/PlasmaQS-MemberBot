module.exports = class cmds {
    constructor() {
        this.name = `cmds`,
        this.alias = [`help`, `commands`],
        this.usage = `cmds`,
        this.permlevel = 1
    }
    run(client,message,args) {
        const Discord = require(`discord.js`);

        const cmdembed = new Discord.MessageEmbed()
        .setAuthor(`Commands`, client.user.avatarURL())
        .setDescription('`cmds`, `eval`, `ping`, `say`, `stats`, `uptime`, `yesoryes`')
        .setFooter(`Powered by a heavily modified but totally not Discord.js`);
        return message.channel.send(cmdembed)
    }
}