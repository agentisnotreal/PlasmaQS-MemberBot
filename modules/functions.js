module.exports = client => {
    client.getPermlevel = (user, guild) => {
        const { managers, adminRole } = require("../config.json");

        if (!user) throw new Error("Missing argument in client.getPermlevel function! Argument: user");
        if (!guild) throw new Error("Missing argument in client.getPermlevel function! Argument: guild");

        if (isNaN(Number(user))) throw new Error("Argument user function client.getPermlevel must be an ID!");
        if (isNaN(Number(guild))) throw new Error("Argument guild function client.getPermlevel must be an ID!");

        let server = client.guilds.cache.get(guild);
        if (!server) throw new Error("Invalid guild specified in client.getPermlevel function!");

        let admin = server.roles.cache.get(adminRole);

        let member = server.members.cache.get(user);
        if (!member) throw new Error("Invalid user specified in client.getPermlevel function!");

        if (managers.includes(user)) {
            return 3;
        } else if (member.roles.cache.has(admin) || member.roles.cache.position >= admin.position) {
            return 2;
        } else return 1;
    };
}