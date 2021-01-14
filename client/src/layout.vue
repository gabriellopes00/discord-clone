<template>
  <!-- layout  -->
  <div id="grid">
    <ServerList />
    <ServerName serverName="Gabriel's Server" />
    <ChannelList />
    <UserInfo userName="User 1" />
    <ChannelInfo channelName="Gabriel's Channel" />
    <ChannelData />
    <UserList :Userlist="Userlist" />
  </div>
</template>

<script>
// Componenets
import ServerList from './components/server-list/server-list'
import ServerName from './components/server-name/server-name'
import ChannelList from './components/channel-list/channel-list'
import UserInfo from './components/user-info/user-info'
import ChannelInfo from './components/channel-info/channel-info'
import ChannelData from './components/channel-data/channel-data'
import UserList from './components/user-list/user-list'

export default {
  components: {
    ServerList,
    ServerName,
    ChannelList,
    UserInfo,
    ChannelInfo,
    ChannelData,
    UserList,
  },
  data() {
    return {
      // User list
      Userlist: {
        onlineUsers: [
          {
            name: 'Gabriel Lopes',
            isBot: false,
          },
          {
            name: 'Bot 1',
            isBot: true,
          },
          {
            name: 'User 1',
            isBot: false,
          },
        ],
        offlineUsers: [
          {
            name: 'Bot 9',
            isBot: true,
          },
          {
            name: 'Bot 25',
            isBot: true,
          },
          {
            name: 'User 21',
            isBot: false,
          },
          {
            name: 'User 76',
            isBot: false,
          },
          {
            name: 'Bot 3',
            isBot: true,
          },
        ],
      },
    }
  },
}
</script>

<style scoped>
#grid {
  display: grid;
  grid-template-columns: 71px 240px auto 240px;
  grid-template-rows: 46px auto 52px;
  grid-template-areas:
    'sl sn ci ci'
    'sl cl cd ul'
    'sl ui cd ul';

  height: 100vh;
}
</style>
