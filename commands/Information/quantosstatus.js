module.exports = class quantosstatus {
    constructor() {
        this.settings = {
            name: "quantosstatus",
            alias: ["qs"],
            permlevel: 1,
            disabled: false
        }
        this.about = {
            usage: "quantosstatus",
            info: "Sends the status of all QuantOS Infrastructure",
            category: "Information"
        }
    }
    async run(client, message, args) {
        // rewrote (kinda) this command, still messy because yes ~agent

        const fetch = require("node-fetch");
        const { MessageEmbed } = require("discord.js");

        // QuantOS Infrastructure
        let quantosBase = await fetch("https://quantum-science.xyz");
        let quantosPortal = await fetch("https://verify.quantum-science.xyz");
        let quantosPanel = await fetch("https://qwn.quantum-science.xyz");

        let qBaseStats = `${client.emoji.tick} **Online**`;
        let qPortalStats = `${client.emoji.tick} **Online**`;
        let qPanelStats = `${client.emoji.tick} **Online**`;

        // Misc. Infrastructure
        let robloxAPI = await fetch("https://api.roblox.com/docs/");
        let plasmaPDN = await fetch("https://pdn.plasmainc.xyz");
        let rAPIStats = `${client.emoji.tick} **Online**`;
        let pPDNStats = `${client.emoji.tick} **Online**`;

        let uptimestats = 3;

        if (quantosBase.status > 299 || quantosBase.status < 200) {
            qBaseStats = `${client.emoji.cross} **${quantosBase.status}** | ${quantosBase.statusText}`;
            uptimestats -= 1
        }
        if (quantosPortal.status > 299 || quantosPortal.status < 200) {
            qPortalStats = `${client.emoji.cross} **${quantosPortal.status}** | ${quantosPortal.statusText}`;
            uptimestats -= 1
        }
        if (quantosPanel.status > 299 || quantosPanel.status < 200) {
            qPanelStats = `${client.emoji.cross} **${quantosPanel.status}** | ${quantosPanel.statusText}`;
            uptimestats -= 1
        }
        if (robloxAPI.status > 299 || robloxAPI.status < 200) {
            rAPIStats = `${client.emoji.cross} **${robloxAPI.status}** | ${robloxAPI.statusText}`;
        }
        if (plasmaPDN.status > 299 || plasmaPDN.status < 200) {
            pPDNStats = `${client.emoji.cross} **${plasmaPDN.status}** | ${plasmaPDN.statusText}`;
        }

        let status = new MessageEmbed()
            .setTitle("QuantOS Status")
            .setDescription(`
**Base:** ${qBaseStats}
**Panel:** ${qPanelStats}
**Verify:** ${qPortalStats}

${client.emoji.plasma} **PDN:** ${pPDNStats}
<:rstudio:726804277024129147> **API:** ${rAPIStats}

**NOTE:** This is __not 100% accurate!__`)
            .setFooter(`${uptimestats}/3 Online`);

        return message.channel.send(status);
    }
}


