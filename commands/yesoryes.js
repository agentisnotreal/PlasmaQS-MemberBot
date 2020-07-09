module.exports = class yesoryes {
    constructor() {
        this.name = `yesoryes`,
            this.alias = [`redpill`],
            this.usage = `yesoryes`,
            this.permlevel = 1
    }
    run(client, message, args, config) {
        return message.channel.send(`https://cdn.plasmainc.xyz/QSI_facts.mp4`)
    }
}