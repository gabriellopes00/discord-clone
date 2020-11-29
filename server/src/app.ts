  import express from 'express'
  import http from 'http'

  import MessagesController from './controllers/MessagesController'

const app = express()
const server = http.createServer(app)

const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:8080'
  }
})

let messagesArray = ['Hello... Welcome']

io.on('connection', (socket: any):void => {
  
  io.emit('getInitialMessages', messagesArray)
  
  socket.on('sendMessage', (message:string):void => {
    messagesArray.push(message)
    MessagesController.storeMessage(message)
    if(message === 'clear') messagesArray = []
    io.emit('returnMessage', messagesArray)
  })
})

app.get('/showData', async (req, res) => {
  const data = MessagesController.getData()
  res.json(data)
})

const port:number = 3001
server.listen(port, () => console.log(`Server running at http://localhost:${port}`))