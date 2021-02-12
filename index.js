const { pqsClient } = require("./modules/client");
const client = new pqsClient();

// Exports
module.exports = {
    client: client,
}

// Modules
require("./modules/CommandHandler")(client);
require(`./modules/EventHandler`)(client);
require(`./modules/logger`)(client);
require(`./modules/functions`)(client);

// Login System
switch (client.config.bot.devmode) {
    case true:
        client.login(client.config.bot.tokenDev);
        break;
    case false:
        client.login(client.config.bot.token);
        break;
}