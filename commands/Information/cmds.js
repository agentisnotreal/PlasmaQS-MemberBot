module.exports = class cmds {
    constructor() {
        this.settings = {
            name: "cmds",
            alias: ["help"],
            permlevel: 1,
            disabled: false
        }
        this.about = {
            usage: "cmds",
            info: "Sends a list of commands",
            category: "Information"
        }
    }
    run(client, message, args, config) {
        const { MessageEmbed } = require(`discord.js`);
        let CH = require("../../modules/CommandHandler");
        let cmdmap = CH.commands;

        let admin = new Array(),
            fun = new Array(),
            information = new Array()

        for (let cmd of cmdmap.values()) {
            switch (cmd.about.category) {
                case "Admin":
                    admin.push(`\`${cmd.settings.name}\``);
                    break;
                case "Fun":
                    fun.push(`\`${cmd.settings.name}\``);
                    break;
                case "Information":
                    information.push(`\`${cmd.settings.name}\``)
            }
        }

        let cmdlist = new MessageEmbed()
            .setTitle("Commands")

        if (client.getPermlevel(message.author.id, message.guild.id) >= 2) cmdlist.addField(`Admin [${admin.length}]`, admin.join(", "));
        cmdlist.addField(`Fun [${fun.length}]`, fun.join(", "))
        .addField(`Information [${information.length}]`, information.join(", "))
        .setFooter("Powered by better-djs11™");

        return message.channel.send(cmdlist);

    }
}