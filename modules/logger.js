//MODULES - LOGGER

//Node Modules
const ts = require(`time-stamp`)

module.exports = client => {

  // Logs into console, with colour options
  logger = (colour, string) => {
    let stringclr;
    let response;

    if (!string) {
      response = `The string in the "logger" function cannot be blank!`;
      return response;
    }

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

    if (stringclr == undefined) {
      stringclr - "\x1b[33m";
    }

    console.log("\x1b[47m\x1b[30m" + ts('DD/MM/YYYY') + " " + ts('HH:mm:ss:ms') + "\x1b[0m " + stringclr + "LOGS " + ">\x1b[0m " + string);
    //console.log(stringclr + `[${ts('DD/mm/YYYY') + " " + ts('HH:mm:ss:ms')}] || LOGS > ${string}`)
    response = `Success!`;
    return response;
  }

  // Logs into console, with colour choices & nothing preceeding the string
  logger.plain = (colour, string) => {
    let stringclr;
    let response;

    if (!string) {
      response = `The string in the "logger" function cannot be blank!`;
      return response;
    }

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

    if (stringclr == undefined) {
      stringclr - "\x1b[33m";
    }

    console.log(stringclr + string)
    response = `Success!`;
    return response;
  };

  logger.custom = (header, colour, string) => {
    let stringclr;
    let response;

    if (!string) {
      response = `The string in the "logger" function cannot be blank!`;
      return response;
    }

    if (!header) {
      response = `The header in the "logger" function cannot be blank!`;
      return response;
    }

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

    if (stringclr == undefined) {
      stringclr - "\x1b[33m";
    }

    console.log("\x1b[47m\x1b[30m" + ts('DD/MM/YYYY') + " " + ts('HH:mm:ss:ms') + "\x1b[0m " + stringclr + header + " " + ">\x1b[0m " + string);
    //console.log(stringclr + `[${ts('HH:mm:ss:ms')}] || ${header} > ${string}`)
    response = `Success!`;
    return response;
  }

  // Logs into console as an error, with red colour
  logger.error = (string) => {
    let response;

    if (!string) {
      response = `ERROR > The string in the "logger.error" function cannot be blank!`;
      return response;
    } else {
      console.log("\x1b[47m\x1b[30m" + ts('DD/MM/YYYY') + " " + ts('HH:mm:ss:ms') + "\x1b[0m\x1b[31m " + "ERROR " + ">\x1b[0m " + string);
      //console.log(`\x1b[31m[${ts('HH:mm:ss:ms')}] || ERROR > ${string}`);
      response = "Success!";
      return response;
    }
  };

  // Logs into console as a warning, with yellow colour
  logger.warn = (string) => {
    if (!string) {
      response = `The string in the "logger.warn" function cannot be blank!`
      return response;
    } else {
      console.log("\x1b[47m\x1b[30m" + ts('DD/MM/YYYY') + " " + ts('HH:mm:ss:ms') + "\x1b[0m\x1b[33m " + "WARN " + ">\x1b[0m " + string);
     // console.log(`\x1b[33m[${ts('HH:mm:ss:ms')}] || WARN > ${string}`)
      response = "Success!";
      return response;
    }
  }

};