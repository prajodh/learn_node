const express = require("express")
const app = express()
const morgan = require("morgan")
const people = require("./express/routes/people")
const get_i = require("./express/routes/get_i")
// app.use(morgan("tiny"))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/api/people',people)
app.use("/api/get",get_i)




app.listen(5000,()=>{
    console.log("Server is up and running at port 5000")
})