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
    async run(client, message, args) {
        const { MessageEmbed } = require(`discord.js`);
        let userPl = await client.getPermlevel(message.member);

        let categories = [];
        categories.Admin = [],
            categories.Fun = [],
            categories.Information = [];

        for (let cmd of client.commands.values()) {
            if (userPl < cmd.settings.permlevel);
            else
                switch (cmd.about.category) {
                    case "Admin":
                        categories.Admin.push(`\`${cmd.settings.name}\``);
                        break;
                    case "Fun":
                        categories.Fun.push(`\`${cmd.settings.name}\``);
                        break;
                    case "Information":
                        categories.Information.push(`\`${cmd.settings.name}\``)
                }
        }

        let cmdlist = new MessageEmbed()
            .setTitle("Commands");
        for (let ct in categories) {
            let cat = categories[ct];
            if (cat.length !== 0) cmdlist.addField(ct.toString(), cat.join(", "));
        }
        cmdlist.setFooter("Powered by better-djs11™");

        return message.channel.send(cmdlist);

    }
}