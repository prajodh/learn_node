const os = require('os')

//user info
const user = os.userInfo()

//systemuptime
const upTime = os.uptime()


// 
const stats = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(user)
console.log(upTime)
console.log(stats)