<template>
  <div id="grid">
    <ServerList />
    <ServerName serverName="Gabriel's Server"/>
    <ChannelList />
    <UserInfo userName="Gabriel Lopes"/>
    <ChannelInfo channelName="Gabriel's Channel" :searchUser="searchUser"/>
    <ChannelData :messagesArray="messages"/>
    <UserList :Userlist="Userlist" :search_user="searchUser"/>
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
        messages: ['...'],
        searchUser: '',
        Userlist: {
          onlineUsers: ['Gabriel Lopes', 'Silvia Lopes'],
          offlineUsers: [
            'Bot 1',
            'Bot 25',
            'Bot 3',
            'Ana Clara',
            'André Vitor'
          ],
        }
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