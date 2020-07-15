// Node Modules
const config = require(`../config.json`)
const fetch = require(`node-fetch`)

// Imports
const { client, database } = require(`../index`);

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
  logger.plain(`cyan`, `NaaguBot`)
  logger.plain(`cyan`, `Naagu is ready to take over the world!`);
  database.sync();
  client.user.setStatus(`online`)

  setInterval(() => {
    const index = Math.floor(Math.random() * (activities.length - 1) + 1);
    client.user.setActivity(activities[index], { type: "WATCHING" })
  }, 120000);

  setInterval(() => {
    /*Plasma Inc*/ fetch(`https://groups.roblox.com/v1/groups/4192306`).then(res => res.json()).then(body => {
    if (!body) return;
        /*BHNPS*/ fetch(`https://games.roblox.com/v1/games/3657848528/servers/Public?sortOrder=Asc&limit=100`).then(res => res.json()).then(body2 => {

      if (!body2) return;

      let bhnpsPlaying = 0;
      body2.data.forEach(function (r) {
        bhnpsPlaying = r.playing + bhnpsPlaying
      })

      /*Quantum Science*/ fetch(`https://groups.roblox.com/v1/groups/2847031`).then(res => res.json()).then(body3 => {
        if (!body3) return;
          /*QSERF*/ fetch(`https://games.roblox.com/v1/games/3039795291/servers/Public?sortOrder=Asc&limit=100`).then(res => res.json()).then(body4 => {

          if (!body4) return;

          let qserfPlaying = 0;
          body4.data.forEach(function (r) {
            qserfPlaying = r.playing + qserfPlaying
          })

          let math;

          if (qserfPlaying > bhnpsPlaying) math = `[${qs}] \`${qserfPlaying - bhnpsPlaying}\``;
          if (bhnpsPlaying > qserfPlaying) math = `[${plasma}] \`${bhnpsPlaying - qserfPlaying}\``;
          if (qserfPlaying === bhnpsPlaying) math = "`0`";

          let message = `${plasma} **Plasma Inc:** \`${body.memberCount}\`
↳ BHNPS: \`${bhnpsPlaying}\`\n${qs} **Quantum Science:** \`${body3.memberCount}\`
↳ QSERF: \`${qserfPlaying}\`\n\n**Difference:**\nGroup: \`${body3.memberCount - body.memberCount}\`
Game: ${math}
**----------**`;
          let memberlogs = client.channels.cache.get(`705065482780409895`)

          memberlogs.send(message)
        })
      })
    })
  })
  }, 300000)
})