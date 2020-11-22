<template>
  <div id="grid">
    <ServerList />
    <ServerName />
    <ChannelList />
  </div>
</template>

<script>
    import ServerList from './components/ServerList/ServerList'
    import ServerName from './components/ServerName/ServerName'
    import ChannelList from './components/ChannelList/ChannelList'

  export default {
    components: {
      ServerList,
      ServerName,
      ChannelList
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