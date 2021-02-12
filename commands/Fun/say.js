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
    run(client, message, args) {
        let content = args.slice(1).join(" ");
        if (!content) {
            return message.channel.send(`i need something to send or the Discord API will return to an error. now, allow me to explain the error details and how i handle it`);
        } else {
            message.delete();
            return message.channel.send(content);
        }
    }
}