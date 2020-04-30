module.exports = class ping {
    constructor() {
        this.name = `ping`,
            this.alias = [],
            this.usage = `ping`,
            this.permlevel = 1
    }
    run(client, message, args) {
        return message.channel.send(`I can tell you one thing about my ping. It's better than the #donothingdiamond's QUANTos.`)
    }
}