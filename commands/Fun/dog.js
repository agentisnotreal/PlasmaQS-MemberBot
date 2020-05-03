module.exports = class dog {
    constructor() {
        this.name = `dog`,
            this.alias = [],
            this.usage = `dog`,
            this.permlevel = 1
    }
    run(client, message, args, config) {
        return message.reply(`Donators only! (\`%donate\`)`)
    }
}