module.exports = class donate {
    constructor() {
        this.settings = {
            name: "donate",
            alias: [],
            permlevel: 1,
            disabled: false
        }
        this.about = {
            usage: "donate",
            info: "Displays the donation embed",
            category: "Fun"
        }
    }
    run(client, message, args) {
        const { MessageEmbed } = require("discord.js");

        const donate = new MessageEmbed()
            .setColor("31C9DD")
            .setAuthor("Donate to NaaguBot Developers")
            .setDescription(`Support NaaguBot Development and unlock special perks!
By donating you have access to all donator commands to whichever guild you are!

Donate via [PayPal](http://donate.drinks-tea.me/) 5USD! *Please include in the notes your DISCORD ID, if you need support, DM agentisnotreal!*`)
            .setImage("https://www.activebeat.com/wp-content/uploads/2017/11/Female-Heart.jpg")
            .setTimestamp();
        return message.channel.send(donate)
    }
}

