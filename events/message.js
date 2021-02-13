// Node Modules
const Discord = require(`discord.js`);

// Imports
const { client, database, CH } = require(`../index`);
const config = require(`../config.json`);

client.on("message", async message => {
  // Check if message is in a DM or author is a bot
  if (message.channel.type == `dm` || message.author.bot || message.author.id === client.user.id) return;

  let args = message.content.split(" ");

  if (args[0].startsWith(client.prefix)) {
    let cmd = client.commands.fetch(args[0].toLowerCase());
    if (!cmd) return;

    client.commands.run(cmd.settings.name, message, message.member).catch(e => {
      switch (e.message) {
        case "Invalid permissions!":
          message.channel.send("keep sucking, you arent high enough");
          break;
        case "Commands cannot be executed in DMs!":
          message.channel.send("bro dont try and run shit in dms");
          break;
        default:
          message.channel.send(`Darn! Diamond's caused some external interference again. Error: ${e.message}`);
          break;
      }
    })
  }

  reactioncruncher(message)
  function reactioncruncher(message) {
    client.db.starboard.create({
      id: message.id,
      waitfor: 360000
    })

    async function deleter(message) {
      await database.destroy({ where: { id: message.id } });
    }

    setTimeout(() => { deleter(message) }, 360000);
  }

  if (message.mentions.has(client.user)) {
    // Checks if bot was mentioned using `@everyone` or `@here`
    if (message.content.includes("@everyone") || message.content.includes("@here")) return;

    // Ping response message
    let { quotes } = require("../assets/quotes.json");
    let e = Math.floor((Math.random() * quotes.length));
    return message.channel.send(quotes[e]);
  }
})
