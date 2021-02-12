module.exports = class stats {
    constructor() {
        this.settings = {
            name: "stats",
            alias: [],
            permlevel: 1,
            disabled: false
        }
        this.about = {
            usage: "stats",
            info: "Displays the very real bot statistics",
            category: "Information"
        }
    }
    run(client, message, args, config) {
        const { MessageEmbed } = require(`discord.js`);

        let totalSeconds = (client.uptime / 1000);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;

        let stats = new MessageEmbed()
            .setAuthor("Stats", client.user.avatarURL())
            .setDescription(`**Ping:** \`0ms\`
**Uptime:** \`100%\`
**Lines of Diamond-era code:** \`0\``)
            .addField(`**Actual Stats**`, `**Ping:** \`${client.ws.ping}ms\`\n**Uptime:** \`${hours}\` hours, \`${minutes}\` minutes and \`${Math.round(seconds)}\` seconds`)
            .setFooter("Powered by Discord.js v11")
        return message.channel.send(stats);
    }
}