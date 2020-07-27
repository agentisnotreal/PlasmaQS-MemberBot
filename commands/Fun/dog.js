module.exports = class dog {
    constructor() {
        this.settings = {
            name: "dog",
            alias: [],
            permlevel: 1,
            disabled: false
        }
        this.about = {
            usage: "dog",
            info: "Sends a picture of a dog (locked behind a paywall)",
            category: "Fun"
        }
    }
    run(client, message, args, config) {
        return message.reply(`Donators only! (\`%donate\`)`)
    }
}