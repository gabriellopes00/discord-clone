<template>
  <div class="container">
    <div class="messages">
      <!-- Messages Componenets -->
      <ChannelMessage 
        v-for="message  in 1" 
        :key="message" 
        authorName="Gabriel Lopes" 
        :date="getDate"
      >
        Well come to my discord-clone. See this project in
        <a class="link" href="https://github.com/gabriellopes00/discord-clone">my github</a>
      </ChannelMessage>   

      <ChannelMessage 
        isBot
        hasMention
        v-for="message  in 1" 
        :key="message" 
        authorName="Bot" 
        :date="getDate"
      >
        <Mention>Gabriel Lopes</Mention> Hii, how are you ??
      </ChannelMessage>

      <ChannelMessage
        authorName="User 1"
        :date="getDate"
        v-for="message  in messagesArray" 
        :key="message" 
      >
        {{ message }}
      </ChannelMessage>

    </div>
    <div class="input-wrapper">
      <input 
        type="text" 
        name="message" 
        v-model="message" 
        placeholder="Type a message here, and press enter." 
        id="input-message"
        @keypress.enter="writeMessage(message)"
      >
      <div class="icon">
        <At :size="24" />
      </div>
    </div>
  </div>
</template>

<script>
  import At from 'vue-material-design-icons/At'
  import { io } from 'socket.io-client'
  // Compoenents
  import ChannelMessage from './ChannelMessage'
  import Mention from './Mention'

  export default {
    components: {
      At,
      ChannelMessage,
      Mention
    },
    data(){
      return{
        messagesArray: [],
        message: '',
        date: ''
      }
    },
    // Get initial messages from the server (enable the "created()" function to connect with the server)
    // created(){
    //   this.socket = io('http://localhost:3001/')
    //   this.socket.on('getInitialMessages', messages => {
    //     this.messagesArray = messages
    //   })
    // },
    // Sending messages to server, and getting the returned messages
    methods: {
      writeMessage(message){
        this.socket.emit('sendMessage', message)
        this.message = ''
        this.getReturnedMessage()
      },
      getReturnedMessage(){ 
        this.socket.on('returnMessage', messages => {
          this.messagesArray = messages
        })
      }
    },
    // Get date
    computed:{
      getDate(){
        return new Date().toString()
      }
    }
  }

</script>

<style lang="scss" scoped>
  .container {
    grid-area: cd;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background-color: var(--primary);
    flex: 1;
  }

  .input-wrapper{
    width: 100%;
    padding: 0 16px;
    height: 68px;

    input{
      width: 100%;
      height: 44px;
      padding: 0 10px 0 57px;
      border-radius: 5px;
      color: var(--white);
      background-color: var(--chat-input);

      &::placeholder{
        color: var(--grey);
        font-size: 16px;
      }
    }
    
    .icon{
      color: var(--grey);
      position: relative;
      top: -50%;
      left: 14px;
      transition: .2s;
      width: 24px;
    }
  }
    
  .messages {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;   
    height: calc(100vh - 46px - 68px);
    max-height: calc(100vh - 46px - 68px);

    .channelmessage:first-child {
      margin-top: 0;
    }

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--tertiary);
      border-radius: 4px;
    }

    &::-webkit-scrollbar-track {
      background-color: var(--secondary);
    }
  }

  .link{
    color: var(--grey);
    outline: none;
  }
</style>