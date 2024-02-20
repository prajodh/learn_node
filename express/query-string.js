const express = require("express")
const app = express()
const data = require("./data")


app.get("/api/product/",(req,res)=>{
    let new_data = []
    for(i of data["products"]){
        if (i.id === 1){
            new_data.push(i)
        }}
    res.json(
        new_data
    )
})

app.get("/api/products/:item_id",(req,res)=>{
    products = data.products
    const single_product = products.find((products) => products.id === Number(req.params["item_id"]))
    if (!single_product){
        return res.status(404).send("No such product")
    }
    res.json(single_product)
})


app.get("/api/v1/query",(req,res)=>{
    console.log(req.query)
    res.end("Hello World")
})




app.listen(5000,()=>{
    console.log("server is running")
})