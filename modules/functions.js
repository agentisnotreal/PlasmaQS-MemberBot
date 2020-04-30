//APEX SAFEGUARD MODULES - FUNCTIONS

//Node Modules
const ts = require(`time-stamp`)

//Imports
const { db } = require(`../index`)

module.exports = client => {

  // Function: Searches for user
  client.searchformember = (guild, query) => {
    if (!query) return;
    query = query.toLowerCase();

    var a = [];
    var b;

    try {
      b = guild.members.cache.find(x => x.displayName.toLowerCase() == query);
      if (!b) guild.members.cache.find(x => x.user.username.toLowerCase() == query);
    } catch (err) { };
    if (b) a.push(b);
    guild.members.cache.forEach(member => {
      if (
        (member.displayName.toLowerCase().startsWith(query) ||
          member.user.username.toLowerCase().startsWith(query)) &&
        member.id != (b && b.id)
      ) {
        a.push(member);
      };
    });
    return a;
  };
  random_item = items => {
    return items[Math.floor(Math.random() * items.length)];
  }
  wait = ms => {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }
};
