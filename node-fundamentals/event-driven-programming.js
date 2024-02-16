const EventEmitter = require("events")

const customEmitter = new EventEmitter()

customEmitter.on("response",(name,id)=>{
    console.log("data recieved "+name+" "+id)
})


customEmitter.on("response",()=>{
    console.log("logic 2")
})

customEmitter.emit("response","john",12) // emit always after the events
