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
        const fileAmount = `${jsFiles.length}`;
        logger(`green`, `Loading ${fileAmount} commands.\n`);

        // Command Loader
        for (const f of jsFiles) {
            const file = require(folder + f);
            const cmd = new file();

            const name = cmd.name;
            commands.set(name, cmd);

            logger(`green`, `Command '${name}' has loaded`);
            for (const alias of cmd.alias) {
                aliases.set(alias, name);
            }
        }

        logger(`green`, `All commands have loaded Successfully. Now loading events.\n`);
        this.commands = commands;
        this.aliases = aliases;
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
