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
        let quantosBase = await fetch("https://api.quantum-science.xyz");
        let quantosPortal = await fetch("https://verify.quantum-science.xyz");
        let quantosPanel = await fetch("https://qwn.quantum-science.xyz");

        // Misc. Infrastructure
        let robloxAPI = await fetch("https://api.roblox.com/docs/");
        let plasmaPDN = await fetch("https://pdn.plasmainc.xyz");

        let uptimestats = 3;

        let status = new MessageEmbed()
            .setTitle("QuantOS Status")
            .setDescription(`
**API:** ${getEndpointStatus(quantosBase, true)}
**Panel:** ${getEndpointStatus(quantosPanel, true)}
**Verify:** ${getEndpointStatus(quantosPortal, true)}

${client.emoji.plasma} **PDN:** ${getEndpointStatus(plasmaPDN)}
<:rstudio:726804277024129147> **API:** ${getEndpointStatus(robloxAPI)}

**NOTE:** This is __not 100% accurate!__`)
            .setFooter(`${uptimestats}/3 Online`);

        return message.channel.send(status);

        function getEndpointStatus(endpoint, deductuptimestats) {
            if (endpoint.status > 299 || endpoint.status < 200) {
                if (deductuptimestats === true) uptimestats -= 1;
                return `${client.emoji.cross} **${endpoint.status}** | ${endpoint.statusText}`;
            } else {
                return `${client.emoji.tick} **Online**`;
            }
        }
    }
}


