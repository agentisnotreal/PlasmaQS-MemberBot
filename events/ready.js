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

  publishStats();

  setInterval(() => {
    publishStats();
  }, 300000)

  function publishStats() {
    client.fetchStats().then(stats => {
      let { MessageEmbed, WebhookClient } = require("discord.js");

      let emoji, colour = "";
      let gap = stats.gap.game

      if (stats.gap.majority === "plasma") emoji = client.emoji.plasma + " "
      else if (stats.gap.majority === "quantum") emoji = client.emoji.qs + " "
      else emoji = "";

      if (gap === 0) colour = client.colour.grey
      else if (gap < 5) colour = client.colour.red
      else if (gap < 10) colour = client.colour.yellow
      else if (gap < 50) colour = client.colour.purple
      else if (gap < 100) colour = client.colour.blue
      else colour = client.colour.green

      let info = new MessageEmbed()
        .setColor(colour)
        .addField("Group Members", `**Quantum Science:** ${stats.quantum.group}\n**Plasma Inc:** ${stats.plasma.group}`)
        .addField("Game Players", `**QSERF:** ${stats.quantum.game}\n**BHNPS:** ${stats.plasma.game}`)
        .addField("Difference", `**Group:** ${stats.gap.group}\n**Games:** ${emoji}${gap}`)
        .setTimestamp();

      let webhook = new WebhookClient(client.config.other.webhook.id, client.config.other.webhook.token);
      return webhook.send(info);
    })
  }
})
