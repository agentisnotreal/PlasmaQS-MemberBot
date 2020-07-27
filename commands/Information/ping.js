module.exports = class ping {
    constructor() {
        this.settings = {
            name: "ping",
            alias: [],
            permlevel: 1,
            disabled: false
        }
        this.about = {
            usage: "ping",
            info: "Displays the real ping",
            category: "Information"
        }
    }
    run(client, message, args, config) {
        return message.channel.send(`I can tell you one thing about my ping. It's better than the #donothingdiamond's QUANTos.`)
    }
}