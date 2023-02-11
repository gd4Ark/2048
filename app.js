const express = require('express')
const http = require('http')

const app = express()

app.listen(3001, '0.0.0.0', () => {
    console.log("2048 starting on port 3001");
})

app.use(express.static(__dirname))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
