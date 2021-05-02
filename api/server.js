const express = require('express');
const server = express()
server.use(express.json())

//router, middleware

server.get('/', (req, res) => {
    res.send('welcome to the Recipe API')
})

server.use((err, req, res, next) => {
    res.status(500).json({message: 'something went wrong, try again'})
})

module.exports = server;