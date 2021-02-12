//MODULES - LOGGER

//Node Modules
const ts = require(`time-stamp`)

module.exports = pqsLog => {
  // Logs into console, with colour options
  pqsLog.logger = async (colour, string) => {
    return new Promise((resolve, reject) => {
      let stringclr;
      if (!string) return reject(new Error("No string specified!"));
      switch (colour) {
        case "green":
          stringclr = `\x1b[32m`;
          break;
        case "blue":
          stringclr = `\x1b[34m`;
          break;
        case "red":
          stringclr = "\x1b[31m";
          break;
        case "cyan":
          stringclr = "\x1b[36m";
          break;
        case "purple":
          stringclr = "\x1b[35m";
          break;
        case "yellow":
          stringclr = "\x1b[33m"
          break;
        default:
          stringclr = "\x1b[33m"
          break;
      }
      return resolve(console.log(`\x1b[47m\x1b[30m${ts('DD/MM/YYYY')} ${ts('HH:mm:ss:ms')}\x1b[0m${stringclr} [LOGS]\x1b[0m ${string}`));
    })
  }

  // Logs into console, with colour choices & nothing preceeding the string
  pqsLog.logger.plain = async (colour, string) => {
    return new Promise((resolve, reject) => {
      let stringclr;
      if (!string) return reject(new Error("No string specified!"));
      switch (colour) {
        case "green":
          stringclr = `\x1b[32m`;
          break;
        case "blue":
          stringclr = `\x1b[34m`;
          break;
        case "red":
          stringclr = "\x1b[31m";
          break;
        case "cyan":
          stringclr = "\x1b[36m";
          break;
        case "purple":
          stringclr = "\x1b[35m";
          break;
        case "yellow":
          stringclr = "\x1b[33m"
          break;
        default:
          stringclr = "\x1b[33m"
          break;
      }
      return resolve(console.log(stringclr + string));
    })
  };

  pqsLog.logger.custom = async (header, colour, string) => {
    return new Promise((resolve, reject) => {
      let stringclr;
      if (!string) return reject(new Error("No string specified!"));
      if (!header) return reject(new Error("No header specified!"));
      switch (colour) {
        case "green":
          stringclr = `\x1b[32m`;
          break;
        case "blue":
          stringclr = `\x1b[34m`;
          break;
        case "red":
          stringclr = "\x1b[31m";
          break;
        case "cyan":
          stringclr = "\x1b[36m";
          break;
        case "purple":
          stringclr = "\x1b[35m";
          break;
        case "yellow":
          stringclr = "\x1b[33m"
          break;
        default:
          stringclr = "\x1b[33m"
          break;
      }
      return resolve(console.log(`\x1b[47m\x1b[30m${ts('DD/MM/YYYY')} ${ts('HH:mm:ss:ms')}\x1b[0m${stringclr} [${header}]\x1b[0m ${string}`));
    })
  }

  // Logs into console as an error, with red colour
  pqsLog.logger.error = async (string) => {
    return new Promise((resolve, reject) => {
      if (!string) return reject(new Error("No string specified!"));
      return resolve(console.log(`\x1b[47m\x1b[30m${ts('DD/MM/YYYY')} ${ts('HH:mm:ss:ms')}\x1b[0m\x1b[31m [ERROR]\x1b[0m ${string}`));
    })
  };

  // Logs into console as a warning, with yellow colour
  pqsLog.logger.warn = (string) => {
    return new Promise((resolve, reject) => {
      if (!string) return reject(new Error("No string specified!"));
      return resolve(console.log(`\x1b[47m\x1b[30m${ts('DD/MM/YYYY')} ${ts('HH:mm:ss:ms')}\x1b[0m\x1b[33m [ERROR]\x1b[0m ${string}`));
    })
  }
};