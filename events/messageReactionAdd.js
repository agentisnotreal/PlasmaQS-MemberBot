const { client } = require("../index");
const { MessageEmbed } = require("discord.js");

client.on("messageReactionAdd", async (messageReaction, user) => {

    let starredmsg = await client.db.starboard.findOne({ where: { id: messageReaction.message.id } }).catch(e => console.error(e))
    if (!starredmsg) return;

    let channel = client.channels.cache.get(client.config.channels.starboard);

    if (messageReaction.count >= 2 && messageReaction.emoji.name == "⭐") {
        let embed = new MessageEmbed()
            .setColor("#ffc83d")
            .setAuthor(messageReaction.message.author.tag)
            .setThumbnail(messageReaction.message.author.avatarURL({ format: "png", size: 2048, dynamic: true }))
            .addField("Channel", messageReaction.message.channel, true)
            .addField("Message", `[here](${messageReaction.message.url})`, true)
            .setDescription(`${messageReaction.message.content}`)

        var image = messageReaction.message.attachments.array();
        if (image && image.length) {
            let imageurl = image[0].url
            let attachembed = embed.setImage(`${imageurl}`)
            channel.send(attachembed)

            await client.db.starboard.destroy({ where: { id: messageReaction.message.id } }).catch(e => console.error(e))
        } else {
            channel.send(embed)
            await client.db.starboard.destroy({ where: { id: messageReaction.message.id } }).catch(e => console.error(e))
        }
    }
})