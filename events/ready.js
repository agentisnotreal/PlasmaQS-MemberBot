// Node Modules
const config = require(`../config.json`)
const fetch = require(`node-fetch`)

// Imports
const { client } = require(`../index`);

// Activities List
let activities = [
  "something.host",
  "shady shit happen",
  "the kinky chamber",
  "Diamond coding",
  "for traitors",
  "my 100% Uptime™️ metrics",
  "my 0ms ping",
  "Plasma Inc fall",
  "you sleep"
]


client.on(`ready`, () => {

  // Ready Sequence
  client.log.plain(`cyan`, `Plasma-QS Member Counter (and more)`)
  client.log.plain(`cyan`, `${client.user.username} is ready to conquer the world!`);

  setInterval(() => {
    if (client.lockActivity == true) return;
    const index = Math.floor(Math.random() * (activities.length - 1) + 1);
    client.user.setActivity(activities[index], { type: "WATCHING" })
  }, 120000);

  setInterval(() => {
    client.fetchStats().then(stats => {
      let { MessageEmbed } = require("discord.js");

      let emoji;

      if (stats.gap.majority === "plasma") emoji = client.emoji.plasma + " "
      else if (stats.gap.majority === "quantum") emoji = client.emoji.qs + " "
      else emoji = "";

      let info = new MessageEmbed()
        .setColor("98ff98")
        .addField("Group Members", `**Quantum Science:** ${stats.quantum.group}\n**Plasma Inc:** ${stats.plasma.group}`)
        .addField("Game Players", `**QSERF:** ${stats.quantum.game}\n**BHNPS:** ${stats.plasma.game}`)
        .addField("Difference", `**Group:** ${stats.gap.group}\n**Games:** ${emoji}${stats.gap.game}`)
        .setTimestamp();

      return client.channels.cache.get(client.config.channels.counting).send(info);
    })
  }, 300000)
})
