module.exports = class say {

    constructor() {
        this.settings = {
            name: "say",
            alias: [],
            permlevel: 1,
            disabled: false
        }
        this.about = {
            usage: "say [message]",
            info: "Sends a message as Naagu",
            category: "Fun"
        }
    }
    run(client, message, args, config) {
        let content = args.slice(1).join(` `)
        if (!content) {
            return message.channel.send(`What the fuck am I supposed to send?`)
        } else {
            message.delete()
            message.channel.send(content)
            return;
        }
    }
}