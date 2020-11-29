  import mongoose from 'mongoose'
  import MessagesEntity from '../entities/messages'

class MessagesModel{

  private Message = mongoose.model('messages', MessagesEntity)

  async storeMessage(message: string): Promise<void>{
    try {
      const newMessage = new this.Message({message})
      newMessage.save()
    } catch {
      throw new Error('Something unexpected happened :(')
    }
  }
  async getMessages(): Promise<Array<Object>> {
    return this.Message.find()
  }
}

export default new MessagesModel