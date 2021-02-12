module.exports = class gamestatus {
    constructor() {
        this.settings = {
            name: "gamestatus",
            alias: ["gs"],
            permlevel: 1,
            disabled: false
        }
        this.about = {
            usage: "gamestatus [--flag (game/group)]",
            info: "Shows group/game status of the scifi community",
            category: "Information"
        }
    }
    async run(client, message, args) {
        const fetch = require(`node-fetch`);
        const { MessageEmbed } = require("discord.js");

        let flag = args[1];

        if (!flag) return message.channel.send(`category must be specified, stupid \`game\`, \`group\``);

        if (flag.toLowerCase() === "game") {

            let b1 = await fetch(`https://games.roblox.com/v1/games/3657848528/servers/Public?sortOrder=Asc&limit=100`).then(res => res.json());
            let b2 = await fetch(`https://games.roblox.com/v1/games/3039795291/servers/Public?sortOrder=Asc&limit=100`).then(res => res.json());
            let b3 = await fetch(`https://games.roblox.com/v1/games/17541193/servers/Public?sortOrder=Asc&limit=100`).then(res => res.json());
            let b4 = await fetch(`https://games.roblox.com/v1/games/331811267/servers/Public?sortOrder=Asc&limit=100`).then(res => res.json());

            /*PLASMA - BHNPS*/
            if (!b1) return;

            let bhnpsPlaying = 0;
            b1.data.forEach(r => bhnpsPlaying += r.playing);


            /*QUANTUM - QSERF*/
            if (!b2) return;

            let qserfPlaying = 0;
            b2.data.forEach(r => qserfPlaying += r.playing);

            /*PINEWOOD - PBCC*/
            if (!b3) return;

            let pbccPlaying = 0;
            b3.data.forEach(r => pbccPlaying += r.playing);

            /*INNOVATION - SPACESHIP*/
            if (!b4) return;

            let iisPlaying = 0;
            b4.data.forEach(r => iisPlaying += r.playing);

            let info = new MessageEmbed()
                .setAuthor(`Game Statistics`, client.user.avatarURL({ size: 2048, format: "png" }))
                .setDescription(`**[PB]** PBCC: ${pbccPlaying}
**[QS]** QSERF: ${qserfPlaying}
**[II]** IIS: ${iisPlaying}
**[PI]** BHNPS: ${bhnpsPlaying}
`)
                .setFooter(`Total users playing: ${iisPlaying + pbccPlaying + bhnpsPlaying + qserfPlaying}`);

            return message.channel.send(info)

        } else if (flag.toLowerCase() === "group") {
            let plasmaMembers = await fetch(`https://groups.roblox.com/v1/groups/4192306`).then(res => res.json());
            let quantumMembers = await fetch(`https://groups.roblox.com/v1/groups/2847031`).then(res => res.json());
            let pinewoodMembers = await fetch(`https://groups.roblox.com/v1/groups/159511`).then(res => res.json());
            let innovationMembers = await fetch(`https://groups.roblox.com/v1/groups/157764`).then(res => res.json());

            let groupInfo = new MessageEmbed()
                .setAuthor("Group Statistics", client.user.avatarURL({ size: 2048, format: "png" }))
                .setDescription(`
**Plasma Inc:** ${plasmaMembers.memberCount}
**Quantum Science:** ${quantumMembers.memberCount}
**Pinewood Builders:** ${pinewoodMembers.memberCount}
**Innovation Inc:** ${innovationMembers.memberCount}`);

            return message.channel.send(groupInfo);
        } else return message.channel.send(`invalid category, smartass \`game\`, \`group\``);
    }
}