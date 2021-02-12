const { client } = require("../index");

client.on("inviteCreate", invite => {
    if (client.config.other.enforceWhitelist === false) return;
    if (invite.inviter.id === client.user.id) return;

    return invite.delete("For security reasons, you must use the \"whitelist\" command to add users to this server");
})