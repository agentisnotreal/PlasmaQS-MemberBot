module.exports = class setstatus {

    constructor() {
        this.settings = {
            name: "setstatus",
            alias: [],
            permlevel: 3,
            disabled: false
        }
        this.about = {
            usage: "setstatus <status>",
            info: "Sets bot status",
            category: "Admin"
        }
    }
    run(client, message, args) {
        let status = args.slice(1).join(" ");

        if (!status) {
            if (client.lockActivity == true) {
                client.lockActivity = false;
                return message.channel.send("activities unlocked");
            } else {
                return message.channel.send("specify an activity to set");
            }
        }

        client.user.setActivity(status, { type: "WATCHING" });
        client.lockActivity = true;
        return message.channel.send(`successfully set activity to \`${status}\``);
    }
}