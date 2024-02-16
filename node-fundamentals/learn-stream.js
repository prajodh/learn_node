const fs = require("fs")

const stream = fs.createReadStream('../content/big.txt') // creating a read stream

// reading from event emitter data
stream.on("data",(result)=>{
    console.log(result)
})


const stream_ = fs.createReadStream('./content/big.txt',{highWaterMark : 90000, encoding:"utf-8"}) // creating a read stream

// reading from event emitter data
stream_.on("data",(result)=>{
    console.log(result)
})

stream.on('error',(err)=>{console.log(err)})