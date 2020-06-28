module.exports = class quantosstatus {
    constructor() {
        this.name = `quantosstatus`,
            this.alias = [`qs`, `quantosstats`],
            this.usage = `quantosstatus`,
            this.permlevel = 1
    }
    run(client, message, args) {
        // this is a huge mess because i wrote it at 12am and cba to make it nice ~agent

        const fetch = require("node-fetch");
        const { MessageEmbed } = require("discord.js");

        fetch("https://quantos.xyz").then(base => {
            fetch("https://api.quantos.xyz").then(api => {
                fetch("https://bot.quantos.xyz").then(bot => {
                    fetch("https://portal.quantos.xyz").then(portal => {
                        fetch("https://pdn.plasmainc.xyz").then(pdn => {
                            fetch("https://panel.quantos.xyz").then(panel => {
                                fetch("https://api.roblox.com/docs/").then(rbx => {

                                    let apistats;
                                    let botstats;
                                    let portalstats;
                                    let pdnstats;
                                    let basestats;
                                    let panelstats;
                                    let rbxstats;

                                    let uptimestats = 5

                                    if (base.status > 299 || base.status < 200) {
                                        ;
                                        basestats = `❌ **${base.status}** ${base.statusText}`
                                        uptimestats -= 1
                                    } else {
                                        basestats = `<:tick:709325548341559326> **${base.status}** ${base.statusText}`;
                                        uptimestats += 1
                                    }

                                    if (api.status > 299 || api.status < 200) {
                                        ;
                                        apistats = `❌ **${api.status}** ${api.statusText}`
                                        uptimestats -= 1
                                    } else {
                                        apistats = `<:tick:709325548341559326> **${api.status}** ${api.statusText}`;
                                        uptimestats += 1
                                    }

                                    if (bot.status > 299 || bot.status < 200) {
                                        ;
                                        botstats = `❌ **${api.status}** ${api.statusText}`
                                        uptimestats -= 1
                                    } else {
                                        botstats = `<:tick:709325548341559326> **${bot.status}** ${bot.statusText}`;
                                        uptimestats += 1
                                    }

                                    if (portal.status > 299 || portal.status < 200) {
                                        ;
                                        portalstats = `❌ **${portal.status}** ${portal.statusText}`
                                        uptimestats -= 1
                                    } else {
                                        portalstats = `<:tick:709325548341559326> **${portal.status}** ${portal.statusText}`;
                                        uptimestats += 1
                                    }

                                    if (pdn.status > 299 || pdn.status < 200) {
                                        ;
                                        pdnstats = `❌ **${pdn.status}** ${pdn.statusText}`
                                    } else {
                                        pdnstats = `<:tick:709325548341559326> **${pdn.status}** ${pdn.statusText}`;
                                    }

                                    if (panel.status > 299 || panel.status < 200) {
                                        ;
                                        panelstats = `❌ **${panel.status}** ${panel.statusText}`
                                        uptimestats -= 1
                                    } else {
                                        panelstats = `<:tick:709325548341559326> **${panel.status}** ${panel.statusText}`;
                                        uptimestats += 1
                                    }

                                    if (rbx.status > 299 || rbx.status < 200) {
                                        ;
                                        rbxstats = `❌ **${rbx.status}** ${rbx.statusText}`
                                    } else {
                                        rbxstats = `<:tick:709325548341559326> **${rbx.status}** ${rbx.statusText}`;
                                    }

                                    let status = new MessageEmbed()
                                        .setTitle("QuantOS Status")
                                        .setDescription(`**API:** ${apistats}
**Base:** ${basestats}
**Bot:** ${botstats}
**Panel:** ${panelstats}
**Portal:** ${portalstats}\n
${plasma} **PDN:** ${pdnstats}
<:rstudio:726804277024129147> **API:** ${rbxstats}`)
                                        .setFooter(`${uptimestats}/5 Online`);

                                    return message.channel.send(status);
                                })
                            })
                        })
                    })
                })
            })
        })
    }
}
