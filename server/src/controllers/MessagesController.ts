  import MessagesModel from '../models/Messages'

class MessagesController{

  async storeMessage(message: string){
    try {
      MessagesModel.storeMessage(message)
    } catch {
      throw Error('Something unexpected happened :(')
    }
  }

  async getData(){
    MessagesModel.getMessages()
  }

}

export default new MessagesController