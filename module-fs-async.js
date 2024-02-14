const {readFile, writeFile} = require('fs')

console.log('strat')
readFile("./content/first.txt","utf-8", (err, result)=>{
    if (err){
        console.log(err)
    }
    const first = result
    readFile("./content/first.txt","utf-8", (err, result)=>{
        if (err){
            console.log(err)
        }
        const second = result
        writeFile('./content/result-sync1.txt', `the result is ${first}, ${second}`,(err,result)=>{
            if (err){
                console.log(err)
            }
            console.log('done with this task')
})
})
})

console.log('starting the next task')