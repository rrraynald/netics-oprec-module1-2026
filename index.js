const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

app.get('/health', (req,res) => {
    res.json({
        nama: "Sersan Mirai Afrizal",
        nrp: "5025241999",
        status: "UP",
        timestamp: new Date().toISOString(),
        uptime: `${Math.floor(process.uptime())}s`
    })
})

app.listen(PORT)