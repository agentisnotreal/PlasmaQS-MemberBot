module.exports = class currentinfo {
    constructor() {
        this.settings = {
            name: "currentinfo",
            alias: ["ci"],
            permlevel: 1,
            disabled: false
        }
        this.about = {
            usage: "currentinfo",
            info: "Sends current statistics of QS and Plasma Inc",
            category: "Information"
        }
    }
    async run(client, message, args) {
        const { MessageEmbed } = require(`discord.js`);
        let stats = await client.fetchStats();

        let info = new MessageEmbed()
            .setAuthor(`Current Group Stats for lazy people`, client.user.avatarURL({ size: 2048, type: "png" }))
            .addField(`${client.emoji.plasma} Plasma Inc`, `Group: \`${stats.plasma.group}\`\nBHNPS: \`${stats.plasma.game}\``)
            .addField(`${client.emoji.qs} Quantum Science Inc`, `Group: \`${stats.quantum.group}\`\nQSERF: \`${stats.quantum.game}\``)
            .setFooter(`Difference: ${stats.gap.group} | ${stats.gap.game} | what the FUCK is up, bitches`);

        return message.channel.send(info)
    }
}