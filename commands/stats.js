module.exports = class stats {
    constructor() {
        this.name = `stats`,
            this.alias = [],
            this.usage = `stats`,
            this.permlevel = 1
    }
    run(client, message, args) {
        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;
        let uptime = `\`${days}\` days, \`${hours}\` hours, \`${minutes}\` minutes and \`${Math.round(seconds)}\` seconds`;

        let coolshit = new Discord.MessageEmbed()
            .setAuthor(`Statistics`, client.user.avatarURL())
            .setDescription(`**Ping:** \`0ms\`\n**Uptime:** \`100%\`\n**Lines of Diamond-era code:** \`0\``)
            .addField(`**Actual Stats**`, `**Ping:** \`${client.ws.ping}ms\`\n**Uptime:** ${uptime}`)
            .setFooter(`Powered by a heavily modified but totally not Discord.js`)

    }
}