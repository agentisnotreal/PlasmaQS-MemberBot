module.exports = class banritual {
    constructor() {
        this.settings = {
            name: "banritual",
            alias: ["ban", "ixev"],
            permlevel: 2,
            disabled: false
        }
        this.about = {
            usage: "banritual [user]",
            info: "Bans a user from the server",
            category: "Admin"
        }
    }
    run(client, message, args, config) {
        let reason = args.slice(2).join(` `);
        let member = message.mentions.members.first()

        if (!member) {
            return message.reply(`Please mention a user!`)
        }

        if (!reason) {
            return message.reply(`A reason is required!`)
        }

        if (!member.bannable) {
            return message.reply(`Oh oh. I can't ban this user.`)
        }

        member.ban(reason);
        return message.channel.send(`**${member.user.tag}** has been banned from Clown HQ! https://media.discordapp.net/attachments/640253570217803776/678026485478457376/hr.gif`)
    }
}