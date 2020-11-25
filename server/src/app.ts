  import cors from 'cors'
  import express from 'express'
  import { Server, createServer } from 'http'

const app = express()
app.use(cors())

const server: Server = createServer(app)
const io = require("socket.io")(server)

io.on('connection', (socket:any):void => {
  let msg = 'hello word'
  socket.emit('connected', msg)
})

const port = 3001
server.listen(port, () => console.log(`Server running at http://localhost:${port}`))