const logger = (req,res,next)=>{
    console.log(req.method,req.url,new Date())
    next()
}

const authorize = (req,res,next)=>{
    if (req.query.user === "prajodh"){
        console.log("Authorize")
        next()
    }
    else{
        res.status(401).send("unathorized")
    }
    
}

module.exports = {logger,authorize}