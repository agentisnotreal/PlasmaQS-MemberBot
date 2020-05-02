module.exports = class evaluate {

    constructor() {
        this.name = 'eval',
            this.alias = [],
            this.usage = 'eval [code]'
        this.permlevel = 5
    }
    run(client, message, args, config) {

        function clean(text) {
            if (typeof (text) === "string")
                return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            else
                return text;
        }

        try {
            const code = args.slice(1).join(` `);
            let evaled = eval(code);

            if (!code) {
                return message.channel.send(`What the fuck am I supposed to evaluate?`)
            } else

                if (typeof evaled !== "string")
                    evaled = require("util").inspect(evaled);
            const evalcomplete = clean(evaled)
            return message.channel.send(`**Success:**\n\`\`\`js\n${evalcomplete}\n\`\`\``)

        } catch (err) {
            return message.channel.send(`**Error:**\n\`\`\`js\n${clean(err)}\n\`\`\``)
        }
    }
}