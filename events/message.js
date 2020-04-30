// Node Modules
const Discord = require(`discord.js`);

// Imports
const { client } = require(`../index`);
const { db } = require(`../index`);
const config = require(`../config.json`);

client.on("message", message => {

  // Check if message is in a DM or author is a bot
  if (message.channel.type == `dm`) return;
  if (message.author.bot == true) return;

  if (message.mentions.has(client.user)) {


    // Checks if bot was mentioned using `@everyone` or `@here`
    if (message.content.includes(`@everyone`) || message.content.includes(`@here`)) {
      return;
    }

    // Ping response message
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
})