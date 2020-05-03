module.exports = class cat {
    constructor() {
        this.name = `cat`,
            this.alias = [],
            this.usage = `cat`,
            this.permlevel = 1
    }
    run(client, message, args, config) {
        return message.reply(`Donators only! (\`%donate\`)`)
    }
}