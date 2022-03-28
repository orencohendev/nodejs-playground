const chalk = require('chalk')
const getNotes = require('./notes.js')


console.log("App file loaded.")
var msg = getNotes()
console.log(msg)
console.log(chalk.bold.underline.green("Success!"))