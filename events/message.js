// Node Modules
const Discord = require(`discord.js`);

// Imports
const { client, database, CH } = require(`../index`);
const config = require(`../config.json`);

client.on("message", async message => {

  // Check if message is in a DM or author is a bot
  if (message.channel.type == `dm`) return;
  if (message.author.bot == true) return;
  if (message.author.id == client.user.id) return;

  let args = message.content.split(" ");

  let command = args[0];

  let cmd = CH.getCommand(config.prefix, command.toLowerCase())

  if (cmd) {
    let getpl = await client.getPermlevel(message.author.id, message.guild.id);
    if (cmd.settings.permlevel > getpl) {
      return message.channel.send(`${client.emoji.error} Fuck off, you aren't important enough to run this command! Keep sucking, you'll get there soon...`)
    }

    try {
      cmd.run(client, message, args, config);
    } catch (e) {
      return message.channel.send(`${client.emoji.error} It's all Diamond's fault that \`${cmd.settings.name}\` broke! Error Message: \`${e.message}\``);
    }
  };

  reactioncruncher(message)

  async function reactioncruncher(message) {
    database.create({
      id: message.id,
      waitfor: 360000
    })

    async function deleter(message) {
      await database.destroy({ where: { id: message.id } });
    }

    setTimeout(function () { deleter(message) }, 360000)

  }

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
      `Cease.`,
      `QuantOS V2 will be out soon.`,
      `We all know my QuantOS is superior to diamond's.`,
      `That information is above your payroll`,
      `GRRRRR THOSE DARN TRAITORS`,
      `Real men fap on other men`,
      'OWO DADDY HURRAH',
      'Stop asking.',
      'Cease this topic,',
      'I bet I get payed more than you',
      `Bow before me, for I am Dictator EramsorGR`,
      `I've spoken with my team.
We've decided to deny your appeal. Wild and I knew from the very start of taking back QS that we had to draw a line that could not be recrossed: accomplices to the occupation cannot be unbanned. You may have not participated in the occupation as much as some of the other accomplices and/or conspirators, but you still participated nonetheless and that cannot be forgiven. I apologize for the inconvenience. Have a good day.`,
      `It will be a slice of cake to remake your panel`,
      `fucking ass developer`,
      `> Eat my ass
Interesting offer`,
      `We’ve removed all of the diamond-era code`,
      `Kiddo I couldn't care more about you, QSTF or anyone inside it, if you really think I would really spend time and brain capacity to create spy accounts, and "infiltrate" your servers, then boy you have some trust issues with your friends. I've moved on from QSTF the day I left it to join QAC. QSTF is no longer a thing, so I suggest you to move on as well.\n
      If would like to appeal your ban do so in QOC- oh wait you did appeal for it and then deleted it and left..? Well not my issue anymore!
      I don't care if you have my face or my name, they are no secret, and you using it to make feel scared shows your level as a person. I am ashamed for your "friends" being your "friends", probably because you are going to pull something like this to them.`,
      `> qs can suck my hypothetical sausage
  Interesting offer`,
      `You have been suspended by the QSI, QAC and QSST for violating clause five of the new administration rules, rule one in the old rules.\n
Due to an ongoing case on you by QIAD, your suspension time is unset and currently indefinite. 
Your suspension time will be updated soon. If you have any objections state them now and await for an answer.\n 
~EramsorGR, Director Of SST`,
      `> I am so furious
bust an angry nut`,
      `https://media.discordapp.net/attachments/639637926413729804/732103231605571595/unknown.png`
    ]
    let e = Math.floor((Math.random() * options.length));
    return message.channel.send(options[e])
  }
})
