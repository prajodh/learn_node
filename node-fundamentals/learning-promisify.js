const fs = require("fs")
const util = require('util')
const getText = util.promisify(fs.readFile)
const writetext = util.promisify(fs.writeFile)

// const getText = (path)=>{
//     return new Promise((resolve, reject)=>{
//         fs.readFile(path,"utf-8",(err, data)=>{
//             if (err){
//                 reject(err)
//             }
//             else{
//                 resolve(data)    
//             }
//         })

//     })
// }



// getText('./content/first.txt').then(result => console.log(result)).catch((err)=>console.log(err))


const start = async ()=>{
    try{
        const first = await getText("./content/first.txt", "utf-8")
        const second = await getText("./content/subfolder/text.txt", "utf-8")
        console.log(first + " " +second)
        writetext("./content/promisofy.txt", first + " " +second)
    }
    catch(error){
        console.log(error)
    }
}

start()

