module.exports = class cat {
    constructor() {
        this.settings = {
            name: "cat",
            alias: [],
            permlevel: 1,
            disabled: false
        }
        this.about = {
            usage: "cat",
            info: "Sends a picture of a cat (locked behind a paywall)",
            category: "Fun"
        }
    }
    run(client, message, args) {
        return message.reply("Donators only! (`%donate`)");
    }
}