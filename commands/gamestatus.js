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

        /*PLASMA - BHNPS*/ fetch(`https://games.roblox.com/v1/games/3657848528/servers/Public?sortOrder=Asc&limit=100`).then(res => res.json()).then(b1 => {
            if (!b1) return;

            let bhnpsPlaying = 0;

            if (b1.errors) {
                bhnpsPlaying = `Error ${b1.errors[0].code} | ${b1.errors[0].message}`;
            } else if (b1.data == undefined) {
                bhnpsPlaying = `Unable to retrieve player count`
            } else {
                b1.data.forEach(function (r) {
                    bhnpsPlaying = r.playing + bhnpsPlaying
                })
            }

            /*QUANTUM - QSERF*/ fetch(`https://games.roblox.com/v1/games/3039795291/servers/Public?sortOrder=Asc&limit=100`).then(res => res.json()).then(b2 => {
                if (!b2) return;

                let qserfPlaying = 0;

                if (b2.errors) {
                    qserfPlaying = `Error ${b2.errors[0].code} | ${b2.errors[0].message}`;
                } else if (b2.data == undefined) {
                    qserfPlaying = `Unable to retrieve player count`
                } else {
                    b2.data.forEach(function (r) {
                        qserfPlaying = r.playing + qserfPlaying
                    })
                }
                /*PINEWOOD - PBCC*/ fetch(`https://games.roblox.com/v1/games/17541193/servers/Public?sortOrder=Asc&limit=100`).then(res => res.json()).then(b3 => {
                    if (!b3) return;

                    let pbccPlaying = 0;

                    if (b3.errors) {
                        pbccPlaying = `Error ${b3.errors[0].code} | ${b3.errors[0].message}`;
                    } else if (b3.data == undefined) {
                        pbccPlaying = `Unable to retrieve player count`
                    } else {
                        b3.data.forEach(function (r) {
                            pbccPlaying = r.playing + pbccPlaying
                        })
                    }
                        /*INNOVATION - SPACESHIP*/ fetch(`https://games.roblox.com/v1/games/331811267/servers/Public?sortOrder=Asc&limit=100`).then(res => res.json()).then(b4 => {
                        if (!b4) return;

                        let iisPlaying = 0;

                        if (b4.errors) {
                            iisPlaying = `Error ${b4.errors[0].code} | ${b4.errors[0].message}`;
                        } else if (b4.data == undefined) {
                            iisPlaying = `Unable to retrieve player count`
                        } else {
                            b4.data.forEach(function (r) {
                                iisPlaying = r.playing + iisPlaying
                            })
                        }
                        let info = new Discord.MessageEmbed()
                            .setAuthor(`Game Statistics`, client.user.avatarURL({ size: 2048, type: "png" }))
                            .setDescription(`**[PB]** PBCC: ${pbccPlaying}
**[QS]** QSERF: ${qserfPlaying}
**[II]** IIS: ${iisPlaying}
**[PI]** BHNPS: ${bhnpsPlaying}
`)
                            .setFooter(`Total users playing: ${iisPlaying + pbccPlaying + bhnpsPlaying + qserfPlaying}`)

                        return message.channel.send(info)
                    })
                })
            })
        })
    }
}