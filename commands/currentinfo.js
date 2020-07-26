module.exports = class currentinfo {
    constructor() {
        this.name = `currentinfo`,
            this.alias = [`ci`, `cinfo`],
            this.usage = `currentinfo`,
            this.permlevel = 1
    }
    run(client, message, args, config) {
        const fetch = require(`node-fetch`)
        const Discord = require(`discord.js`)

        /*Plasma Inc*/ fetch(`https://groups.roblox.com/v1/groups/4192306`).then(res => res.json()).then(plasmaMemberCount => {
            if (!plasmaMemberCount) return;
                /*BHNPS*/ fetch(`https://games.roblox.com/v1/games/3657848528/servers/Public?sortOrder=Asc&limit=100`).then(res => res.json()).then(body2 => {
                if (!body2) return;

                let bhnpsPlaying = 0;
                body2.data.forEach(function (r) {
                    bhnpsPlaying = r.playing + bhnpsPlaying
                })

                        /*Quantum Science*/ fetch(`https://groups.roblox.com/v1/groups/2847031`).then(res => res.json()).then(qsMemberCount => {
                    if (!qsMemberCount) return;
                                /*QSERF */ fetch(`https://games.roblox.com/v1/games/3039795291/servers/Public?sortOrder=Asc&limit=100`).then(res => res.json()).then(body4 => {

                        if (!body4) return;

                        let qserfPlaying = 0;
                        body4.data.forEach(function (r) {
                            qserfPlaying = r.playing + qserfPlaying
                        })

                        let gameMath, groupMath;

                        if (qsMemberCount.memberCount > plasmaMemberCount.memberCount) groupMath = qsMemberCount.memberCount - plasmaMemberCount.memberCount;
                        if (plasmaMemberCount.memberCount > qsMemberCount.memberCount) groupMath = plasmaMemberCount.memberCount - qsMemberCount.memberCount;
                        if (qsMemberCount.memberCount === plasmaMemberCount.memberCount) groupMath = 0;
                        if (qserfPlaying > bhnpsPlaying) gameMath = qserfPlaying - bhnpsPlaying;
                        if (bhnpsPlaying > qserfPlaying) gameMath = bhnpsPlaying - qserfPlaying;
                        if (qserfPlaying === bhnpsPlaying) gameMath = 0;

                        let info = new Discord.MessageEmbed()
                            .setAuthor(`Current Group Stats for lazy people`, client.user.avatarURL({ size: 2048, type: "png" }))
                            .addField(`${client.emoji.plasma} Plasma Inc`, `Group: \`${plasmaMemberCount.memberCount}\`\nBHNPS: \`${bhnpsPlaying}\``)
                            .addField(`${client.emoji.qs} Quantum Science Inc`, `Group: \`${qsMemberCount.memberCount}\`\nQSERF: \`${qserfPlaying}\``)
                            .setFooter(`Difference: ${groupMath} | ${gameMath} | well it's all gone to shit`)

                        return message.channel.send(info)
                    })
                })
            })
        })
    }
}