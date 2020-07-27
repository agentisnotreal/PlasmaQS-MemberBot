const fs = require(`fs`)

class CommandHandler {
    constructor(data = {}) {

        // Check if commands folder is set
        if (!data.folder) {
            return logger.error("No folder specified.");
        }
        this.folder = data.folder;

        // Check if prefix is set
        if (!data.prefix) {
            logger.error("No prefix specified.");
        }
        if (!Array.isArray(data.prefix)) data.prefix = [data.prefix];
        data.prefix.sort((a, b) => a.length < b.length);
        this.prefix = data.prefix;
        this._loadFrom(data.folder)
    }

    _loadFrom(folder) {
        const commands = new Map();
        const aliases = new Map();

        const files = fs.readdirSync(folder);
        files.filter(f => fs.statSync(folder + f).isDirectory())
            .forEach(nested => fs.readdirSync(folder + nested).forEach(f => files.push(nested + '/' + f)));
        const jsFiles = files.filter(f => f.endsWith('.js'));

        // Check if there were any commands found
        if (files.length <= 0) {
            logger.error(`No commands found!`);
        }
        let fileAmount = jsFiles.length;
        logger(`green`, `Loading ${fileAmount} commands`);

        // Command Loader
        for (const f of jsFiles) {
            try {
                const file = require(folder + f);
                const cmd = new file();

                if (cmd.settings.disabled == true) {
                    logger.warn(`Command '${cmd.settings.name}' is disabled. Ignoring file.`);
                } else {
                    const name = cmd.settings.name;
                    commands.set(name, cmd);

                    logger(`green`, `Command '${name}' has loaded`);
                    for (const alias of cmd.settings.alias) {
                        aliases.set(alias, name);
                    }
                }
            } catch (e) {
                logger.error(`Failed to load command from file '${f}'. Reason: ${e}`);
            }
        }

        this.commands = commands;
        this.aliases = aliases;
        module.exports = {
            commands: commands
        }
    }

    getCommand(pfx, string) {

        if (!string) return null;
        if (!pfx) return null;

        let prefix = '';

        let prefixExists = false;

        for (const x of pfx) {
            if (string.startsWith(x)) {
                prefix = x;
                prefixExists = true;
                break;
            }
        }

        if (!prefixExists) return null;

        const command = string.substring(pfx.length);
        let cmd = this.commands.get(command);
        if (!cmd) {
            const alias = this.aliases.get(command);
            if (!alias) return;
            cmd = this.commands.get(alias);
        }
        return cmd;
    }
}

// Exports
module.exports = {
    CommandHandler
};
