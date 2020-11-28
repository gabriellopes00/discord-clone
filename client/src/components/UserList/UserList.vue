<template>
  <div class="user-list">
    <div class="title-users">On-line {{ getOnlineUsers }}</div>
    <UserRow 
      v-for="user in Userlist.onlineUsers" 
      :key="user.name" 
      :nickName="user.name"   
      :isBot="user.isBot" 
    />
    <div class="title-users">Off-line {{ getOfflineUsers }}</div>
    <UserRow 
      v-for="user in Userlist.offlineUsers" 
      :key="user.name" 
      :nickName="user.name"      
      :isBot="user.isBot" 
    />
  </div>
</template>

<script>
  import UserRow from './UserRow'
  
  export default {
    props: {
      Userlist: Object
    },
    components: {
      UserRow
    },
    computed: {
      getOnlineUsers() { return this.Userlist.onlineUsers.length },
      getOfflineUsers() { return this.Userlist.offlineUsers.length }
    }
  }
</script>

<style lang="scss" scoped>
  .user-list{
    grid-area: ul;

    display: flex;
    flex-direction: column;
     
    padding: 3px 6px 10px 16px;background-color: var(--secondary);
    max-height: calc(100vh - 46px);
    overflow-y: scroll;

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
  .title-users{
    margin-top: 20px;
    color: var(--grey);
    font-weight: 500;
    text-transform: uppercase;
  }
</style>