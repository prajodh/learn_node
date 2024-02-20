const people_1 = (req,res)=>{
    console.log(req.body)
    return res.json(req.body)
}

const people_2 = (req,res)=>{
    const {name} = req.body
    if (name){
        res.status(200).json({"sucess":1})
    }
    else{
        return res.status(400).json("no data")
    }
}

const people_3 = (req,res)=>{
    const id = req.params.id
    const name = req.body.name
    console.log(id,name)
    return res.json("sucess")
}


module.exports = {people_1,people_2,people_3}