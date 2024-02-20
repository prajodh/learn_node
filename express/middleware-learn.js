const express = require("express")
const app = express()
const morgan = require('morgan')
const {logger,authorize} = require("./logger")
const data = require("./data")


// the /api show from which base onwards the middleware should be used
// app.use("/api",logger)
app.use([authorize,logger,morgan("tiny")])


app.get("/" ,(req,res)=>{
    res.send("Home")
})

app.get("/about",(req,res)=>{
    res.send("about")
})


app.get("/api/products/:item_id",(req,res)=>{
    products = data.products
    result = products.find((products) => products.id === Number(req.params["item_id"]))
    res.json(result)
})


app.listen(5000,()=>{
    console.log("The Server Is Running")
})