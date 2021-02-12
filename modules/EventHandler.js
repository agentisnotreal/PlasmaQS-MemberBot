
// Node Modules
const fs = require("fs");
const { client } = require("../index");

module.exports = () => {
    fs.readdir(`events`, (err, files) => {
        if (err) client.log.error(`An error occurred when trying to read the events folder! Errror: ${err}`);
        let jsfiles = files.filter(f => f.split(".").pop() === `js`)

        client.log.custom("EVT", "green", `Loading ${jsfiles.length} events`);

        // Event Loader
        jsfiles.forEach(f => {
            try {
                require(`../events/${f}`);
                client.log.custom("EVT", `green`, `Event '${f.replace(/.js/, '')}' has loaded`);
            } catch (e) {
                client.log.error(`Failed to load event '${f.replace(/.js/, '')}'. Reason: ${e.message}\n${e.stack}`);
            }
        })
    })
}