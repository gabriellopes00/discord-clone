import express from 'express'
import http from 'http'

const app = express()
const server = http.createServer(app)

const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:8080'
  }
})

// All the messages will be stored in this array.
let messagesArray = ['Hello... Welcome']

io.on('connection', (socket: any):void => {
  
  io.emit('getInitialMessages', messagesArray)
  
  socket.on('sendMessage', (message:string):void => {
    messagesArray.push(message)
    if(message === 'clear') messagesArray = []
    io.emit('returnMessage', messagesArray)
  })
})

const port:number = 3001
server.listen(port, () => console.log(`Server running at http://localhost:${port}`))