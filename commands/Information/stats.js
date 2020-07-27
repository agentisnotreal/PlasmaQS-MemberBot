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
        const Discord = require(`discord.js`)
        let totalSeconds = (client.uptime / 1000);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;
        let uptime = `\`${hours}\` hours, \`${minutes}\` minutes and \`${Math.round(seconds)}\` seconds`;

        let coolshit = new Discord.MessageEmbed()
            .setAuthor(`Statistics`, client.user.avatarURL())
            .setDescription(`**Ping:** \`0ms\`\n**Uptime:** \`100%\`\n**Lines of Diamond-era code:** \`0\``)
            .addField(`**Actual Stats**`, `**Ping:** \`${client.ws.ping}ms\`\n**Uptime:** ${uptime}`)
            .setFooter(`Powered by a heavily modified but totally not Discord.js`)
            return message.channel.send(coolshit)
    }
}