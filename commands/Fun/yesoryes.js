module.exports = class yesoryes {
    constructor() {
        this.settings = {
            name: "yesoryes",
            alias: ["redpill"],
            permlevel: 1,
            disabled: false
        }
        this.about = {
            usage: "yesoryes",
            info: "facts",
            category: "Fun"
        }
    }
    run(client, message, args, config) {
        return message.channel.send(`https://cdn.plasmainc.xyz/QSI_facts.mp4`)
    }
}