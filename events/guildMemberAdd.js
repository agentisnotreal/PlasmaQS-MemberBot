const { client, whitelist } = require("../index");

client.on("guildMemberAdd", async member => {
    if (member.user.bot) return;

    let welcomechannel = client.channels.cache.get(client.config.channels.welcome);

    let getWhitelist = await whitelist.findOne({ where: { id: member.id } });

    if (!getWhitelist) {
        if (client.config.other.enforceWhitelist === false) return;

        welcomechannel.send(`**${member.user.tag}** is not whitelisted! Removing from server`);
        member.kick("Not whitelisted");
        return;
    } else {
        welcomechannel.send(`Welcome to Clown HQ, ${member.user}!`);
        return;
    }
})