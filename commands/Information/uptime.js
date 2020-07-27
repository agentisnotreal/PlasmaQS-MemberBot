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
    run(client, message, args, config) {
        return message.channel.send(`Unlike the garbage QUANTos, I maintain a perfect **100%** uptime.`)
    }
}