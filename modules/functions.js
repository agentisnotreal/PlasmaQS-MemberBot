module.exports = client => {
    client.getPermlevel = async (user, guild) => {
        return new Promise(async (resolve, reject) => {
        const { managers, adminRole } = require("../config.json");

        if (!user) reject(new Error("Missing argument in client.getPermlevel function! Argument: user"));
        if (!guild) reject( new Error("Missing argument in client.getPermlevel function! Argument: guild"));

        if (isNaN(Number(user))) reject(new Error("Argument user function client.getPermlevel must be an ID!"));
        if (isNaN(Number(guild))) reject(new Error("Argument guild function client.getPermlevel must be an ID!"));

        let server = client.guilds.cache.get(guild);
        if (!server) reject(new Error("Invalid guild specified in client.getPermlevel function!"));

        let admin = server.roles.cache.get(adminRole);

        let member = await server.members.fetch(user);

        if (managers.includes(user)) return resolve(3);
        else if (member.roles.cache.has(admin) || member.roles.highest.position >= admin.position) return resolve(2);
        else return resolve(1);
    })
    };
}