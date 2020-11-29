  import mongoose from 'mongoose'

  mongoose.connect('mongodb://localhost:27017/discord-clone', { 
    useNewUrlParser : true,
    useUnifiedTopology: true
  }, () => {
    console.log('Connected successfully');
  })

const MessagesEntity = new mongoose.Schema({
  body: String
})

export default MessagesEntity