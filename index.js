const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res) => {
    res.send('helloooo')
})

app.listen(port,()=>{
    console.log('Example app from meeee')
})

app.get('/posts', (req,res) => {
    res.send('i\'m in cars')
})