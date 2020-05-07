// Node Modules
const config = require(`../config.json`)
const fetch = require(`node-fetch`)

// Imports
const { client } = require(`../index`);

// Activities List
let activities = [
  "my 100% Uptime™️ metrics",
  "for traitors",
  "my kinky chamber",
  "for Diamond's code",
  "for raids"
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

        fetch(`https://games.roblox.com/v1/games/3657848528/servers/Public?sortOrder=Asc&limit=100`)
          .then(res => res.json()).then(body2 => {

            if (!body2) return;

            let bhnpsPlaying = 0;
            body2.data.forEach(function (r) {
              bhnpsPlaying = r.playing + bhnpsPlaying
            })

            fetch(`https://groups.roblox.com/v1/groups/2847031`)
              .then(res => res.json()).then(body3 => {

                if (!body3) return;

                fetch(`https://games.roblox.com/v1/games/3039795291/servers/Public?sortOrder=Asc&limit=100`)
                  .then(res => res.json()).then(body4 => {

                    if (!body4) return;

                    let qserfPlaying = 0;
                    body4.data.forEach(function (r) {
                      qserfPlaying = r.playing + qserfPlaying
                    })

                    let message = `${plasma} **Plasma Inc:** \`${body.memberCount}\`\n  ↳ BHNPS: \`${bhnpsPlaying}\`\n${qs} **Quantum Science:** \`${body3.memberCount}\`\n  ↳ QSERF: \`${qserfPlaying}\`\n\n**Difference:**\nGroup: \`${body.memberCount - body3.memberCount}\`\nGame: \`${bhnpsPlaying - qserfPlaying}\`\n**----------**`;
                    let memberlogs = client.channels.cache.get(`705065482780409895`)

                    memberlogs.send(message)
                  })
              })
          })
      })
  }, 300000)
})