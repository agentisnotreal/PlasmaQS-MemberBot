## NOTICE
Since this bot now only lives on my own server for the purposes of serving statistics, this bot is no longer (actively) maintained. I recommend forking this repository if you wish to contribute.

---

<div align="center">
  <br />
  <p>
  <a><img src="https://cdn.discordapp.com/attachments/635419144195538944/729231362510291005/ssssssss.png" alt="Quality" /></a>

<a><img src="https://cdn.discordapp.com/attachments/635419144195538944/729273082090487808/d4.png" alt="Quality" width="64" height="55" /></a> <a><img src="https://cdn.discordapp.com/attachments/635419144195538944/729273136163455036/e6.png" alt="Quality" width="64" height="55" /></a>
<h1> Plasma-QS Member Tracker </h1>
<a><img src="https://img.shields.io/badge/Quality-Eramsor%20Grade-red?style=for-the-badge" alt="Quality" /></a>
<a><img src="https://img.shields.io/badge/Did%20this%20get%20me%20banned%20from%20QS%3F-Probably-yellow?style=for-the-badge" alt="Did I Get Banned from QS?"/><a>
<a><img src="https://img.shields.io/badge/QSERF%20Player%20Count-Too%20much-orange?style=for-the-badge" alt="QSERF Player Count?"/><a>
<a><img src="https://img.shields.io/badge/How%20horny%20is%20terry%3F-Horny%20as%20QAC-blue?style=for-the-badge" alt="How horny is Terry?"/><a>

  </p>
  <br />
</div>

## bot

The Plasma-QS Member Tracker is a bot programmed in JS using the discord.js library. This was, and still is a joke project, and contributes nothing to society at all.

## requirements

- Node 12x
- Time to waste

## how to run

Open the `configTemplate.json` file and fill in the values, **then rename it to `config.json`.**

```json
{
    "bot": {
        "devmode": "(Boolean) Enable development mode [true/false]",
        "prefix": "(String) Prefix for commands",
        "managers": [
          "(String/Array) User IDs for users who can run all commands"
        ],
        "token": "(String) Bot Token"
    },
    "channels": {
        "counting": "(String) Channel ID where group stats are displayed",
        "starboard": "(String) Channel ID where starred messages are sent",
        "welcome": "(String) Channel ID where welcome messages are sent"
    },
    "other": {
        "adminRole": "(String) Admin role ID to run higher commands",
        "enforceWhitelist": "(Boolean) Enforce extra join security"
    }
}
```

To install the required libraries, run (in the direrctory of the bot):

```
npm i
```

Once you're done, run `node index.js` and (assumming you've made changes to the code to prevent the bot from having a moment) the bot will go live!

## credits

**Cajess, EramsorGR, Hurrah123456, NSDoppler, TheWildDeveloper**

(Most) quotes seen in `events/message.js` are sourced from these people.

**alexoct, Terryiscool160, TheCakeChicken, TheEmeraldDeveloper**

Provided some of the quotes.

**sgtxd**

Original developer of the starboard feature.

_Developed by agentisnotreal and terryiscool160_

## other

hi eramsor if you're reading this, **cease**.

please do not look in `commands/Information/quantosstatus.js` that command is a mess.

### Made with ❤ by Clown HQ
