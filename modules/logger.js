//Node Modules
const ts = require(`time-stamp`)

module.exports = client => {

  // Logs into console, with colour options
  logger = (colour, string) => {
    let stringclr;

    if (!string) {
      return console.log(`\x1b[31m[${ts('HH:mm:ss:ms')}] || ERROR > The string in the "logger" function cannot be blank!`)
    }

    if (colour == `green`) {
      stringclr = `\x1b[32m`
    } else

      if (colour == `blue`) {
        stringclr = `\x1b[34m`
      } else

        if (colour == `red`) {
          stringclr = `\x1b[31m`
        } else

          if (colour == `cyan`) {
            stringclr = `\x1b[36m`
          } else

            if (colour == `purple`) {
              stringclr = `\x1b[35m`
            } else

              if (colour == `yellow`) {
                stringclr = `\x1b[33m`
              } else {
                stringclr = `\x1b[33m`
              }

    console.log(stringclr + `[${ts('HH:mm:ss:ms')}] || LOGS > ${string}`)
  }

  // Logs into console, with colour choices & nothing preceeding the string
  logger.plain = (colour, string) => {
    let stringclr;

    if (!string) {
      return console.log(`\x1b[31m[${ts('HH:mm:ss:ms')}] || ERROR > The string in the "logger" function cannot be blank!`)
    }

    if (colour == `green`) {
      stringclr = `\x1b[32m`
    } else

      if (colour == `blue`) {
        stringclr = `\x1b[34m`
      } else

        if (colour == `red`) {
          stringclr = `\x1b[31m`
        } else

          if (colour == `cyan`) {
            stringclr = `\x1b[36m`
          } else

            if (colour == `purple`) {
              stringclr = `\x1b[35m`
            } else

              if (colour == `yellow`) {
                stringclr = `\x1b[33m`
              } else {
                stringclr = `\x1b[33m`
              }

    console.log(stringclr + `${string}`)
  };

  // Logs into console as an error, with red colour
  logger.error = (string) => {
    if (!string) {
      return console.log(`\x1b[31m[${ts('HH:mm:ss:ms')}] || ERROR > The string in the "logger.error" function cannot be blank!`)
    } else {
      return console.log(`\x1b[31m[${ts('HH:mm:ss:ms')}] || ERROR > ${string}`)
    }
  };

  // Logs into console as a warning, with yellow colour
  logger.warn = (string) => {
    if (!string) {
      return logger.error(`The string in the "logger.warn" function cannot be blank!`)
    } else {
      return console.log(`\x1b[33m[${ts('HH:mm:ss:ms')}] || WARN > ${string}`)
    }
  }

};