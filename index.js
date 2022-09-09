const express = require('express')
const fs = require('fs')

const app = express()
const port = 3456

app.get('/', (req, res) => {
    console.log('called', new Date().toLocaleString())
    const rawData = fs.readFileSync('jobs.json')
    res.json(JSON.parse(rawData))
})

app.listen(port, console.log('listen'))