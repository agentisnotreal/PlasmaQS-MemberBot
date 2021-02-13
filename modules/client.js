// NPM Modules
const { Client } = require("discord.js");
const Sequelize = require("sequelize");

// Custom Client
class pqsClient extends Client {
    constructor(options) {
        super(options);

        // Config File
        this.config = require("../config.json");

        // Modules
        require("./logger")(pqsClient);

        // Client Variables
        this.devmode = false;
        this.emoji = require("../assets/emoji.json");
        this.colour = require("../assets/colours.json");
        this.log = pqsClient.logger;

        this.commands = new Map();
        this.lockActivity = false;

        this.devmode = this.config.bot.devmode;

        switch (this.devmode) {
            case true:
                this.config.bot.prefix = "&";
                this.log.custom("CORE", "cyan", "\x1b[33m[WARN]\x1b[0m Development mode is enabled");
                break;
        }

        this.prefix = this.config.bot.prefix;

        // Database
        this.db = {};
        const sequelize = new Sequelize('database', 'user', 'password', {
            host: 'localhost',
            dialect: 'sqlite',
            storage: 'database.sqlite',
            logging: false,
        });

        this.db.starboard = sequelize.define("starboard", {
            id: {
                type: Sequelize.STRING,
                unique: true,
                primaryKey: true
            },
            waitfor: {
                type: Sequelize.INTEGER
            }
        })

        this.db.whitelist = sequelize.define("whitelist", {
            id: {
                type: Sequelize.STRING,
                unique: true,
                primaryKey: true
            }
        })

        sequelize.sync();

    }
}

module.exports = {
    pqsClient: pqsClient
}