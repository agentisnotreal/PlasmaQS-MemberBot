const { client } = require("../index");

client.on("inviteCreate", invite => {
    if (client.config.other.enforceWhitelist === false) return;
    if (invite.inviter.id === client.user.id) return;

    invite.inviter.send(`${client.emoji.warn} For security reasons, you must use the \"whitelist\" commands to add users to this server.`);
    return invite.delete();
})