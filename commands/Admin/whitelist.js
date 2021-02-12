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
        if (client.config.other.enforceWhitelist === false) return message.channel.send(`${client.emoji.cross} \`other.enforceWhitelist\` is set to false in the config.json file!`);

        const uid = args[1];

        if (!uid) return message.channel.send(`${client.emoji.cross} No user to whitelist specified!`);

        client.users.fetch(uid).then(async user => {

            let wl = await client.db.whitelist.findOne({ where: { id: uid } });

            if (wl) {
                client.db.whitelist.destroy({ where: { id: uid } });
                message.channel.send(`**${user.tag}** has been removed from the whitelist!`);

                if (message.guild.members.cache.get(uid) !== undefined) {
                    return message.guild.members.cache.get(uid).kick("User is no longer whitelisted");
                }
                return;
            } else if (!wl) {
                client.db.whitelist.create({ id: uid });

                let invite = await client.channels.cache.get(client.config.channels.welcome).createInvite({ maxUses: 1 })
                return message.channel.send(`**${user.tag}** has been added to the whitelist! Here's a __single-use__ invite: https://discord.gg/${invite.code}`);
            }
        }).catch(e => {
            return message.channel.send(`${client.emoji.cross} Invalid user!`);
        })
    }
}