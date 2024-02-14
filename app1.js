// Modules
//note : the exports can be anything based on use case
const hi = require('./utils')
const names = require('./first-module')
const new_entries = require('./second-module')
require('./mind-garnade')


console.log(names)
hi(names.john)
hi(names.peter)
console.log(new_entries.items)
console.log(new_entries.Singleperson)
