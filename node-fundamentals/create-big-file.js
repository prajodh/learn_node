const fs = require("fs")
for (let i = 0 ; i <= 100000; i++){
    fs.writeFileSync("./content/big.txt","hello world",{flag:'a'})
}