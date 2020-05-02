module.exports = class rbinfo {

    constructor() {
        this.name = 'rbinfo',
            this.alias = ['rinfo', 'roblox'],
            this.usage = 'rbinfo [user]'
        this.permlevel = 1
    }
    run(client, message, args, config) {

        const noblox = require(`noblox.js`)
        const Discord = require(`discord.js`)
        const fetch = require(`node-fetch`)

        let username = args.slice(1).join(' ');

        if (!username) {
            return message.channel.send(`What the hell am I supposed to look up?`)
        }

        const pleasewait = new Discord.MessageEmbed()
            .setColor('494949')
            .setAuthor(`Roblox User Information`, 'https://cdn.discordapp.com/emojis/358017662229544960.png?v=1')
            .addField(`**Please Wait**`, `Loading user information for ${username}.`)
        message.channel.send(pleasewait).then(messagething => {

            const uid = Promise.resolve(noblox.getIdFromUsername(username)).catch(e => {
                if (e.message == "User not found") {

                    const notfound = new Discord.MessageEmbed()
                        .setColor('A30404')
                        .setAuthor(`Roblox User Information`, 'https://cdn.discordapp.com/emojis/358017662229544960.png?v=1')
                        .addField(`User not found**`, `Please check for typos, and make sure that the account does actually exist.`)
                    return messagething.edit(notfound)

                } else {
                    logger.error(e.message)
                    return message.channel.send(`**UNEXPECTED ERROR OCCURED!** Error: ${e.message}`)
                }
            })

            const retrievedblurb = uid.then(r => Promise.resolve(noblox.getBlurb(r)))
            const retrievedstatus = uid.then(r => Promise.resolve(noblox.getStatus(retriveduid2)))
            const retrieveduid = uid.then(r => r)


            let color = ((1 << 24) * Math.random() | 0).toString(16);

            retrievedblurb.then(retrievedblurb => {
                retrievedstatus.then(retrievedstatus => {
                    retrieveduid.then(retrieveduid => {
                        var desc = retrievedblurb
                        var stat = retrievedstatus
                        if (retrievedblurb == 0) {
                            desc = `Description is blank and/or not set.`
                        }
                        if (retrievedstatus == 0) {
                            stat = `Status is blank and/or not set.`
                        }
                        fetch(`https://api.roblox.com/users/${retrieveduid}/onlinestatus/`)
                            .then(res => res.json()).then(body => {
                                fetch(`https://users.roblox.com/v1/users/${retrieveduid}`)
                                    .then(res => res.json()).then(body2 => {
                                        var d = new Date(body.LastOnline)
                                        var e = new Date(body2.created)

                                        function addZero(i) {
                                            if (i < 10) {
                                                i = "0" + i;
                                            }
                                            return i;
                                        }

                                        let createdate = `${addZero(e.getUTCDate())}/${addZero(e.getUTCMonth())}/${addZero(e.getUTCFullYear())} @ ${addZero(e.getUTCHours())}:${addZero(e.getUTCMinutes())}:${addZero(e.getUTCSeconds())} (GMT +0)`

                                        let lastonline;
                                        if (body.IsOnline == true) {
                                            lastonline = `Currently Online`
                                        } else {
                                            lastonline = `${addZero(d.getUTCDate())}/${addZero(d.getUTCMonth())}/${addZero(d.getUTCFullYear())} @ ${addZero(d.getUTCHours())}:${addZero(d.getUTCMinutes())}:${addZero(d.getUTCSeconds())} (GMT +0)`
                                        }
                                        let embed = new Discord.MessageEmbed()
                                            .setColor(color)
                                            .setAuthor(`Displaying Roblox Profile of ${username}`, `https://www.roblox.com/headshot-thumbnail/image?userId=${retrieveduid}&width=420&height=420&format=png`, `https://www.roblox.com/users/${retrieveduid}/profile`)
                                            .setThumbnail(`https://www.roblox.com/Thumbs/Avatar.ashx?x=500&y=500&username=${username}`)
                                            .addField(`**General Information**`, `**Username:** ${username}\n**User ID:** ${retrieveduid}\n**Account Created:** ${createdate}\n**Last Online:** ${lastonline}`)
                                            .addField(`**User About**`, `**Status:** ${stat}\n**Description:**\n\`\`\`\n${desc}\n\`\`\``)
                                            .setFooter(`Powered by the Roblox API`, `https://cdn.discordapp.com/emojis/358017662229544960.png?v=1`)
                                        return messagething.edit(embed)
                                    })
                            })
                    })
                })
            })
        })
    }
}