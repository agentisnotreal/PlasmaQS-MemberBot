const { client } = require("../index");
const { enhancedSecurity } = require("../config.json");

client.on("inviteCreate", invite => {
    if (enhancedSecurity === true) return;
    if (invite.inviter.id === client.user.id) return;

    return invite.delete("For security reasons, you must use the \"whitelist\" command to add users to this server");
})