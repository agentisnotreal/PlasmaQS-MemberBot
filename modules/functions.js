module.exports = client => {
    client.getPermlevel = async (member) => {
        return new Promise((resolve, reject) => {
            if (!member) reject(new Error("No member specified!"));

            let permissionlvl = 1;

            try {
                let admin = member.guild.roles.fetch(client.config.other.adminRole);

                if (client.config.bot.managers.includes(member.id)) permissionlvl = 3;
                else if (member.roles.cache.has(client.config.other.adminRole) || member.roles.highest.rawPosition >= admin.rawPosition) permissionlvl = 2;
                else permissionlvl = 1;

                return resolve(permissionlvl);
            } catch (e) {
                return reject(new Error(e.message));
            }
        })
    }

    client.fetchStats = async () => {
        return new Promise(async (resolve, reject) => {
            const fetch = require("node-fetch");

            let fetchPI = await fetch("https://groups.roblox.com/v1/groups/4192306").then(res => res.json());
            let fetchQS = await fetch("https://groups.roblox.com/v1/groups/2847031").then(res => res.json());

            let fetchGames = await fetch("https://games.roblox.com/v1/games?universeIds=1276997182%2C1096507818").then(res => res.json());

            let plBHNPS = fetchGames.data[0].playing;
            let plQSERF = fetchGames.data[1].playing;

            let math = 0;
            let major = "";

            if (plBHNPS > plQSERF) {
                math = (plBHNPS - plQSERF);
                major = "plasma";
            } else if (plQSERF > plBHNPS) {
                math = (plQSERF - plBHNPS);
                major = "quantum";
            } else {
                math = 0;
                major = "none"
            }

            return resolve({
                plasma: {
                    group: fetchPI.memberCount,
                    game: plBHNPS
                },
                quantum: {
                    group: fetchQS.memberCount,
                    game: plQSERF
                },
                gap: {
                    group: fetchQS.memberCount - fetchPI.memberCount,
                    game: math,
                    majority: major
                }
            })
        })
    }
}