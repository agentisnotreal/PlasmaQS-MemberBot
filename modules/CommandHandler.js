const fs = require(`fs`);
const { client } = require("../index");

module.exports = CH => {
    const aliases = new Map();

    const files = fs.readdirSync("commands/");
    files.filter(f => fs.statSync(`commands/${f}`).isDirectory())
        .forEach(n => fs.readdirSync(`commands/${n}`).forEach(f => files.push(`${n}/${f}`)));

    const jsFiles = files.filter(f => f.endsWith(".js"));

    let fileAmount = jsFiles.length;
    client.log.custom("CMD", "green", `Loading ${fileAmount} commands`);

    jsFiles.forEach(f => {
        try {
            const file = require(`../commands/${f}`);
            const cmd = new file();

            if (cmd.settings.disabled === true) {
                return client.log.warn(`Command "${cmd.settings.name}" is disabled. Not loading`);
            } else {
                client.commands.set(cmd.settings.name, cmd);
                client.log.custom("CMD", "green", `Command "${cmd.settings.name}" loaded`);

                for (let alias of cmd.settings.alias) {
                    aliases.set(alias, cmd.settings.name)
                }
                return;
            }
        } catch (e) {
            return client.log.error(`Failed to load file "${f}". Error: ${e}`);
        }
    })

    CH.commands = client.commands;
    CH.aliases = aliases;

    module.exports = {
        commands: CH.commands,
        aliases: CH.aliases
    };

    client.commands.fetch = (name) => {
        let command = "";
        let alias = "";
        if (!name) throw new Error("No command specified!");

        if (name.startsWith(client.prefix)) command = name.substring(1);
        else command = name;

        let cmd = client.commands.get(command);

        if (!cmd) {
            alias = aliases.get(command);
            if (!alias) return null;
            cmd = client.commands.get(alias);
        }
        return cmd;
    }

    client.commands.unload = async (command) => {
        return new Promise(async (resolve, reject) => {
            if (!command) return reject(new Error("No command specified!"));
            if (!client.commands.fetch(command)) return reject(new Error("Invalid command!"));

            let bannedCmds = ["eval", "unload"];
            let cmd = client.commands.fetch(command);
            let cmdCategory = cmd.about.category;
            let cmdName = cmd.settings.name;

            if (bannedCmds.includes(cmdName)) return reject(new Error("For security reasons, this command cannot be unloaded."));

            for (let alias of cmd.settings.alias) {
                aliases.delete(alias);
            }

            client.commands.delete(command);

            try {
                delete require.cache[require.resolve(`../../commands/${cmdCategory}/${cmdName}.js`)];
                client.log.custom("CMD", "red", `Command ${cmdName} unloaded!`);
                return resolve(`Command ${cmdName} unloaded!`);
            } catch (e) {
                return reject(new Error(`An unexpected error occurred: ${e.message}`));
            }
        })
    }

    client.commands.reload = async (command) => {
        return new Promise(async (resolve, reject) => {
            if (!command) return reject(new Error("No command specified!"));
            if (!client.commands.fetch(command)) return reject(new Error("Invalid command!"));

            let cmd = client.commands.fetch(command);
            let cmdCategory = cmd.about.category;
            let cmdName = cmd.settings.name;

            for (let alias of cmd.settings.alias) {
                aliases.delete(alias);
            }

            client.commands.delete(command);

            try {
                delete require.cache[require.resolve(`../../commands/${cmdCategory}/${cmdName}.js`)];

                const file = require(`../../commands/${cmdCategory}/${cmdName}`);
                const cmd = new file();
                client.commands.set(cmd.settings.name, cmd);
                for (let alias of cmd.settings.alias) {
                    aliases.set(alias, cmd.settings.name)
                }

                client.log.custom("CMD", "green", `Command "${cmd.settings.name}" reloaded`);
                return resolve(`Command ${cmd.settings.name} reloaded!`);
            } catch (e) {
                client.log.error(`Failed to reload command "${cmdName}". Error: ${e}`);
                return reject(new Error(`Failed to reload command "${cmdName}". Error: ${e}`));
            }
        })
    }

    client.commands.run = async (command, message, member) => {
        return new Promise((resolve, reject) => {
            if (!command) return reject(new Error("No command specified!"));
            command = client.commands.fetch(command);
            if (!command) return reject(new Error("Invalid command specified!"));
            if (message.channel.type === "dm") return reject(new Error("Commands cannot be executed in DMs!"));

            client.getPermlevel(member, member.guild).then(permlevel => {
                if (permlevel < command.settings.permlevel) return reject(new Error("Invalid permissions!"));
            })

            resolve(command.run(client, message, message.content.split(" ")));
        })
    }
}