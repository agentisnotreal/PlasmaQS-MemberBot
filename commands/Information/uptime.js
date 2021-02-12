module.exports = class uptime {
    constructor() {
        this.settings = {
            name: "uptime",
            alias: [],
            permlevel: 1,
            disabled: false
        }
        this.about = {
            usage: "uptime",
            info: "Displays the real uptime",
            category: "Information"
        }
    }
    run(client, message, args) {
        return message.channel.send(`Doesn't matter, it's still better than Fozbot and QUANTos`);
    }
}