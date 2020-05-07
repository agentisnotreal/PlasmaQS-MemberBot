module.exports = class gamestatus {
    constructor() {
        this.name = `gamestatus`,
            this.alias = [`gstatus`, `gs`],
            this.usage = `gamestatus`,
            this.permlevel = 1
    }
    run(client, message, args, config) {
        const fetch = require(`node-fetch`)
        const Discord = require(`discord.js`)

        fetch(`https://games.roblox.com/v1/games/3657848528/servers/Public?sortOrder=Asc&limit=100`)
            .then(res => res.json()).then(b1 => {

                if (!b1) return;

                let bhnpsPlaying = 0;

                if (b1.data == []) {
                    bhnpsPlaying = 0;
                } else {
                    b1.data.forEach(function (r) {
                        bhnpsPlaying = r.playing + bhnpsPlaying
                    })
                }

                fetch(`https://games.roblox.com/v1/games/3039795291/servers/Public?sortOrder=Asc&limit=100`)
                    .then(res => res.json()).then(b2 => {

                        if (!b2) return;

                        let qserfPlaying = 0;

                        if (b2.data == []) {
                            qserfPlaying = 0;
                        } else {
                            b2.data.forEach(function (r) {
                                qserfPlaying = r.playing + qserfPlaying
                            })
                        }
                        fetch(`https://games.roblox.com/v1/games/17541193/servers/Public?sortOrder=Asc&limit=100`)
                            .then(res => res.json()).then(b3 => {
                                if (!b3) return;

                                let pbccPlaying = 0;

                                if (b3.data == []) {
                                    pbccPlaying = 0;
                                } else {
                                    b3.data.forEach(function (r) {
                                        pbccPlaying = r.playing + pbccPlaying
                                    })
                                }
                                fetch(`https://games.roblox.com/v1/games/331811267/servers/Public?sortOrder=Asc&limit=100`)
                                    .then(res => res.json()).then(b4 => {
                                        if (!b4) return;

                                        let iisPlaying = 0;

                                        if (b4.data == []) {
                                            pbccPlaying = 0;
                                        } else {
                                            b4.data.forEach(function (r) {
                                                iisPlaying = r.playing + pbccPlaying
                                            })
                                        }
                                        let info = new Discord.MessageEmbed()
                                            .setAuthor(`Game Statistics`, client.user.avatarURL({ size: 2048, type: "png" }))
                                            .setDescription(`**[II]** IIS: ${iisPlaying}\n**[PB]** PBCC: ${pbccPlaying}\n**[PI]** BHNPS: ${bhnpsPlaying}\n**[QS]** QSERF: ${qserfPlaying}`)
                                            .setFooter(`Total users playing: ${iisPlaying + pbccPlaying + bhnpsPlaying + qserfPlaying}`)

                                        return message.channel.send(info)
                                    })
                            })
                    })
            })
    }
}