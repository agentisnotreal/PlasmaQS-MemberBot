module.exports = class slut {
    constructor() {
        this.settings = {
            name: "slut",
            alias: ["terry"],
            permlevel: 1,
            disabled: false
        }
        this.about = {
            usage: "slut",
            info: "t e r r y",
            category: "Fun"
        }
    }
    run(client, message, args) {
        let avatar = [
            "https://tr.rbxcdn.com/a8f899393798ea0b6964f5c9f707eb8b/352/352/Avatar/Png",
            "https://tr.rbxcdn.com/fa4c95ef9022e390399d83a4a379ca88/352/352/Avatar/Png"
        ]
        message.channel.send("no daddy, no uwu");
        message.channel.send("no daddy, no uwu");
        return message.channel.send(avatar[Math.floor(Math.random() * avatar.length)]);
    }
}