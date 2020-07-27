// Node Modules
const Discord = require("discord.js");

// Discord Bot
const client = new Discord.Client();
const Sequelize = require("sequelize");

// Configuration File
const config = require(`./config.json`);

// Modules
require(`./modules/EventHandler`)(client);
require(`./modules/logger`)(client);
require(`./modules/emoji`)(client);
require(`./modules/functions`)(client);


// Command Handler
const { CommandHandler } = require('./modules/CommandHandler');
const CH = new CommandHandler({
    folder: __dirname + "/commands/",
    prefix: [config.prefix]
});

const sequelize = new Sequelize('database', 'user', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    storage: 'database.sqlite',
    logging: false,
});

const database = sequelize.define("starboard", {
    id: {
        type: Sequelize.STRING,
        unique: true,
        primaryKey: true
    },
    waitfor: {
        type: Sequelize.INTEGER
    }
})

const whitelist = sequelize.define("whitelist", {
    id: {
        type: Sequelize.STRING,
        unique: true,
        primaryKey: true
    }
})

// Exports
module.exports = {
    CH: CH,
    client: client,
    database: database,
    whitelist: whitelist
}
// Login System
client.login(config.token);