// Node Modules
const config = require(`../config.json`)
const fetch = require(`node-fetch`)

// Imports
const { client } = require(`../index`);

// Activities List
let activities = [
  "my 100% Uptime™️ metrics.",
  "for traitors.",
  "my kinky chamber."
];


client.on(`ready`, () => {

  // Ready Sequence
  logger.plain(`cyan`, `NaaguBot ${config.version}`)
  logger.plain(`cyan`, `Naagu is ready to take over the world!`)
  client.user.setStatus(`online`)

  setInterval(() => {
    const index = Math.floor(Math.random() * (activities.length - 1) + 1);
    client.user.setActivity(activities[index], { type: "WATCHING" })
  }, 120000);

  setInterval(() => {
    fetch(`https://groups.roblox.com/v1/groups/4192306`)
      .then(res => res.json()).then(body => {

        if (!body) return;
        fetch(`https://groups.roblox.com/v1/groups/2847031`)
          .then(res => res.json()).then(body2 => {

            if (!body2) return;

            let message = `**----------**\n${plasma} **Plasma Inc:** \`${body.memberCount}\`\n${qs} **Quantum Science:** \`${body2.memberCount}\`\n\n**Difference:** \`${body.memberCount - body2.memberCount}\`\n**----------**`;
            let memberlogs = client.channels.cache.get(`678578528630865941`)

            memberlogs.send(message)
          })
      })
  }, 300000)
})