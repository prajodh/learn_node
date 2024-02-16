const http =  require('http');

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end("hello world")
    }
    if(req.url === "/about"){
        res.end("a website")
    }
    res.end(`<h1> oops <h1>`)
})


server.listen(5000)