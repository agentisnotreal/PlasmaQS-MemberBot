module.exports = class whitelist {
    constructor() {
        this.settings = {
            name: "whitelist",
            alias: ["wl"],
            permlevel: 2,
            disabled: false
        }
        this.about = {
            usage: "whitelist [userid]",
            info: "Adds/removes user from the server join list (enhancedSecurity must be set to true)",
            category: "Admin"
        }
    }
    async run(client, message, args) {
        const { whitelist } = require("../../index");
        const { enhancedSecurity, welcomeChannel } = require("../../config.json");

        if (enhancedSecurity === false) return message.channel.send(`${client.emoji.cross} \`enhancedSecurity\` is set to false in the config.json file!`);

        const uid = args[1];

        if (!uid) return message.channel.send(`${client.emoji.cross} No user to whitelist specified!`);

        client.users.fetch(uid).then(async user => {

            let wl = await whitelist.findOne({ where: { id: uid } });

            if (wl) {
                whitelist.destroy({ where: { id: uid } });
                message.channel.send(`**${user.tag}** has been removed from the whitelist!`);

                if (message.guild.members.cache.get(uid) !== undefined) {
                    message.guild.members.cache.get(uid).kick("User is no longer whitelisted");
                    return;
                }
                return;
            } else if (!wl) {
                whitelist.create({ id: uid });

                let invite = await client.channels.cache.get(welcomeChannel).createInvite({ maxUses: 1 })
                message.channel.send(`**${user.tag}** has been added to the whitelist! Here's a __single-use__ invite: https://discord.gg/${invite.code}`);
                return;
            }
        }).catch(e => {
            return message.channel.send(`${client.emoji.cross} Invalid user!`);
        })
    }
}