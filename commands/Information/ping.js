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
    run(client, message, args) {
        return message.channel.send(`I can guarantee one thing, my ping annihilates that of #donothingdiamond's QUANTos ping`);
    }
}