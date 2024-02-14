const fs = require("fs")

console.log("first task started")

fs.readFile("./content/first.txt","utf-8",(err,result)=>{
    if (err){
        console.log(err)
        return
    }
    console.log(`the file has ${result}`)
    console.log("Second task complete")
})

console.log("tasks exceution done")