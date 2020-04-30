const Discord = require(`discord.js`)
const fetch = require(`node-fetch`)

const config = require(`./config.json`)
const client = new Discord.Client()
client.login(config.token)

client.on(`ready`, () => {
    console.log(`Naagu is ready to conquer the world!`)
    client.user.setActivity("my 100% Uptime™️ metrics.", { type: 'WATCHING' })
})
setInterval(() => {
    fetch(`https://groups.roblox.com/v1/groups/4192306`)
        .then(res => res.json()).then(body => {

            if (!body) return;
            fetch(`https://groups.roblox.com/v1/groups/2847031`)
                .then(res => res.json()).then(body2 => {

                    if (!body2) return;

                    if (body.memberCount > body2.memberCount) {
                        client.channels.cache.get(`705065482780409895`).send(`${config.plasma} **PLASMA HAS SUCCESSFULLY OVERTAKEN QUANTUM SCIENCE!** ${config.plasma}\n\n**Plasma Inc:** ${body.memberCount}\n**Quantum Science:** ${body2.memberCount}\n**Difference:** ${body.memberCount - body2.memberCount}\n\n*${client.user.tag} will go offline shortly.*\n||@everyone||`);
                        client.channels.cache.get(`701768530697125970`).send(`⚠️ **WARNING:** Killswitch is now active!`)

                    } else {
                        client.channels.cache.get(`705065482780409895`).send(`${config.plasma} \`${body.memberCount}\`\n${config.qs} \`${body2.memberCount}\`\n\n**Difference:** ${body2.memberCount - body.memberCount}`)
                    }
                })
        })
}, 5000)

client.on(`message`, message => {
    if (message.author.bot == true) return;
    if (message.channel.type == `dm`) return;
    let args = message.content.split(" ");

    if (message.mentions.has(client.user)) {
        if (message.content.includes(`@everyone`) || message.content.includes(`@here`)) return;

        let options = [
            `My lawyers are on speed dial!`,
            `I have 100% uptime.`,
            `☺️ Sleeping. and thinking of him...`,
            `GRRRRR THOSE DARN TRAITORS`,
            `Bow before me, for I am Top General EramsorGR`,
            `I've spoken with my team.\nWe've decided to deny your appeal. Wild and I knew from the very start of taking back QS that we had to draw a line that could not be recrossed: accomplices to the occupation cannot be unbanned. You may have not participated in the occupation as much as some of the other accomplices and/or conspirators, but you still participated nonetheless and that cannot be forgiven. I apologize for the inconvenience. Have a good day.`,
            `It will be a slice of cake to remake your panel`,
            `fucking ass developer`,
            `> Eat my ass\nInteresting offer`,
            `We’ve removed all of the diamond-era code`
        ]
        let e = Math.floor((Math.random() * options.length));
        return message.channel.send(options[e])
    }
    if (message.content.startsWith(config.prefix)) {
        if (message.content.toLowerCase().includes(`ping`)) {
            return message.channel.send(`I can tell you one thing about my ping. It's better than the #donothingdiamond's QUANTos.`)
        }
        if (message.content.toLowerCase().includes(`uptime`)) {
            return message.channel.send(`Unlike the garbage QUANTos, I maintain a perfect **100%** uptime.`)
        }
        if (message.content.toLowerCase().includes(`cmds`)) {
            return message.channel.send('```\n%cmds\n%eval\n%ping\n%redpill\n%say\n%stats\n%uptime\n\nVersion: DekiMAS 1.0```')
        }
        if (message.content.toLowerCase().includes(`stats`)) {

            let totalSeconds = (client.uptime / 1000);
            let days = Math.floor(totalSeconds / 86400);
            let hours = Math.floor(totalSeconds / 3600);
            totalSeconds %= 3600;
            let minutes = Math.floor(totalSeconds / 60);
            let seconds = totalSeconds % 60;
            let uptime = `\`${days}\` days, \`${hours}\` hours, \`${minutes}\` minutes and \`${Math.round(seconds)}\` seconds`;

            let coolshit = new Discord.MessageEmbed()
                .setAuthor(`The BEST Stats of ANY Bot`, client.user.avatarURL())
                .setDescription(`**Ping:** \`0ms\`\n**Uptime:** \`100%\`\n**Lines of Diamond-era code:** \`0\``)
                .addField(`**Actual Stats**`, `**Ping:** \`${client.ws.ping}ms\`\n**Uptime:** ${uptime}`)
                .setFooter(`Powered by a very modified but definitely not Discord.js`)

            return message.channel.send(coolshit)
        }
        if (message.content.toLowerCase().includes(`redpill`)) {
            return message.channel.send(`https://cdn.plasmainc.xyz/QSI_facts.mp4`)
        }
        if (message.content.toLowerCase().includes(`say`)) {
            let m = args.slice(1).join(` `);
            if (!m) {
                return message.channel.send(`Fuck you!`)
            } else {
                message.delete()
                return message.channel.send(m);
            }
        }
        if (message.content.toLowerCase().includes(`eval`)) {
            if (message.author.id == `145801678610759680` || message.author.id == `273867501006225419`) {
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
                        return message.channel.send(`Fuck you!`)
                    } else

                        if (typeof evaled !== "string")
                            evaled = require("util").inspect(evaled);
                    const evalcomplete = clean(evaled)
                    return message.channel.send(`**Success:**\n\`\`\`\n${evalcomplete}\n\`\`\``)

                } catch (err) {
                    return message.channel.send(`**Error:**\n\`\`\`\n${clean(err)}\n\`\`\``)
                }
            } else {
                return message.channel.send(`Fuck you!`)
            }
        }
    }
})