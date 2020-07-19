module.exports = class cmds {
    constructor() {
        this.name = `cmds`,
            this.alias = [`help`, `commands`],
            this.usage = `cmds`,
            this.permlevel = 1
    }
    run(client, message, args, config) {
        const Discord = require(`discord.js`);
        let CH = require("../modules/CommandHandler");
        let cmdmap = CH.commands;

        let cmds = new Array();
        cmdmap.forEach(cmd => cmds.push(`\`${cmd.name}\``));
        

        const cmdembed = new Discord.MessageEmbed()
            .setAuthor(`Commands`, client.user.avatarURL())
            .setDescription(cmds.join(", "))
            .setFooter(`Powered by a heavily modified but totally not Discord.js`);
        return message.channel.send(cmdembed)
    }
}