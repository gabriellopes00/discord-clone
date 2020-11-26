<template>
  <div id="grid">
    <ServerList />
    <ServerName serverName="Gabriel's Server"/>
    <ChannelList />
    <UserInfo userName="Gabriel Lopes"/>
    <ChannelInfo channelName="Gabriel's Channel" :searchUser="searchUser"/>
    <ChannelData :messagesArray="messages"/>
    <UserList :Userlist="Userlist" :search_user="searchUser"/>
    <button @click="sendMessage">try socket.io connection</button>
  </div>
</template>

<script>
    import ServerList from './components/ServerList/ServerList'
    import ServerName from './components/ServerName/ServerName'
    import ChannelList from './components/ChannelList/ChannelList'
    import UserInfo from './components/UserInfo/UserInfo'
    import ChannelInfo from './components/ChannelInfo/ChannelInfo'
    import ChannelData from './components/ChannelData/ChannelData'
    import UserList from './components/UserList/UserList'

    import socketIo from 'socket.io-client'

  export default {
    components: {
      ServerList,
      ServerName,
      ChannelList,
      UserInfo,
      ChannelInfo,
      ChannelData,
      UserList
    },
    data(){
      return{
        messages: ['Hello...'],
        searchUser: '',
        Userlist: {
          onlineUsers: [
            {
              name: 'Gabriel Lopes',
              isBot: false
            }, 
            {
              name: 'User 1',
              isBot: false
            }
          ],
          offlineUsers: [
            {
              name: 'Bot 1',
              isBot: true
            },
            {
              name: 'Bot 25',
              isBot: true
            },
            {
              name: 'User 21',
              isBot: false
            },
            {
              name: 'User 76',
              isBot: false
            },
            {
              name: 'Bot 3',
              isBot: true
            },
          ],
        },
        socket: {}
      }
    },
    created(){
      this.socket = socketIo('http://localhost:3001/')
    },
    methods:{
      sendMessage(){ 
        this.socke.on('onload', message => {
          console.log(message);
        })
      }
    }
  }
</script>

<style scoped>
  #grid{
    display: grid;
    grid-template-columns: 71px 240px auto 240px;
    grid-template-rows: 46px auto 52px;
    grid-template-areas: 
      'sl sn ci ci'
      'sl cl cd ul'
      'sl ui cd ul'
    ;

    height: 100vh;
  }
</style>