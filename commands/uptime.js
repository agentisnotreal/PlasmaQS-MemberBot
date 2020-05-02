module.exports = class uptime {
    constructor() {
        this.name = `uptime`,
            this.alias = [],
            this.usage = `uptime`,
            this.permlevel = 1
    }
    run(client, message, args, config) {
        return message.channel.send(`Unlike the garbage QUANTos, I maintain a perfect **100%** uptime.`)
    }
}