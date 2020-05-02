module.exports = class say {

    constructor() {
        this.name = 'say',
            this.alias = ['send'],
            this.usage = 'say [content]'
        this.permlevel = 1
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