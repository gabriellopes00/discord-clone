<template>
  <div id="grid">
    <ServerList />
  </div>
</template>

<script>
    import ServerList from './components/ServerList/ServerList'

  export default {
    components: {
      ServerList
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