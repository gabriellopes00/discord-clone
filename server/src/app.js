  const app = require('express')()
  const server = require('http').createServer(app)

const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:8080'
  }
})

io.on('connection', (socket) => {
  let msg = 'hello word'
  socket.emit('connected', msg)
})

const port = 3001
server.listen(port, () => console.log(`Server running at http://localhost:${port}`))