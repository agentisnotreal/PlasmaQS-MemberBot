module.exports = class whitelist {
    constructor() {
        this.name = "whitelist",
        this.alias = ["wl"],
        this.usage = "whitelist [add/remove] [userid]",
        this.permlevel = 3
    }
    async run(client, message, args) {
        const { whitelist } = require("../index");
        const uid = args[1];

        if (!uid) return message.channel.send(`${client.emoji.cross} No user to whitelist specified!`);

        let user = await client.users.fetch(uid);

        try {
            user;
        } catch (e) {
            return message.channel.send(`${client.emoji.cross} Invalid user!`);
        }

        let wl = await whitelist.findOne({ where: { id: uid}});

        if (wl) {
            whitelist.destroy({ where: { id: uid}});
            message.channel.send(`**${user.tag}** has been removed from the whitelist!`);

            if (message.guild.members.cache.get(uid) !== undefined) {
                message.guild.members.cache.get(uid).kick("User is no longer whitelisted");
                return;
            }
            return;
        } else if (!wl) {
            whitelist.create({ id: uid});

            let invite = await client.channels.cache.get("678272867707781120").createInvite({maxUses: 1})
            message.channel.send(`**${user.tag}** has been added to the whitelist! Here's a __single-use__ invite: https://discord.gg/${invite.code}`);
            return;
        }
    }
}