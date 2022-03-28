var validator = require('validator')
const getNotes = require('./notes.js')


console.log("App file loaded.")
var msg = getNotes()
console.log(msg)
console.log(validator.isURL("https://google.com"))