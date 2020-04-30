
// Node Modules
const fs = require("fs");
const ts = require(`time-stamp`)

// Imports
const log = require(`./logger`)

module.exports = (client) => {
    fs.readdir(`events`, (err, files) => {
        if (err) console.log(err)
        let jsfiles = files.filter(f => f.split(".").pop() === `js`)

        // Check if any events were found
        if (jsfiles.length <= 0) {
            return logger.error(`\x1b[33m[LOGS] > No events found!`)
        }
        logger(`green`, `Loading ${jsfiles.length} events.\n`)

        // Event Loader
        jsfiles.forEach((f, i) => {
            require(`../events/${f}`)
            logger(`green`, `Event '${f}' has loaded.`)
        })
    })
}