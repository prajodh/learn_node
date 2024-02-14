const fs = require('fs')

console.log('start')
const first = fs.readFileSync('./content/first.txt', 'utf8')
const second = fs.readFileSync('./content/subfolder/text.txt', 'utf8')

console.log(first, second)

fs.writeFileSync('./content/result-sync.txt', `the result is ${first}, ${second}`, {flag:'a'})

console.log('done with task')
console.log('strating the next one')