<template>
  <div class="user-list">
    <div class="title-users">On-line {{getOnlineUsers}}</div>
    <UserRow 
      v-for="user in userlist_filterd.onlineUsers" 
      :key="user.name" 
      :nickName="user"
    />
    <div class="title-users">Off-line {{getOfflineUsers}}</div>
    <UserRow 
      isBot 
      v-for="user in userlist_filterd.offlineUsers" 
      :key="user.name" 
      :nickName="user"
    />
  </div>
</template>

<script>
  import UserRow from './UserRow'
  
  export default {
    props: {
      Userlist: Object,
      search_user: String
    },
    components: {
      UserRow
    },
    methods: {
      cl(){ console.log(this.search_user);}
    },
    computed: {
      getOnlineUsers() { return this.Userlist.onlineUsers.length },
      getOfflineUsers() { return this.Userlist.offlineUsers.length },

      userlist_filterd(){ 
        if(this.search_user === '' || this.search_user === ' '){ 
          return this.Userlist
        } else{ 
          const filtered_list = this.Userlist

          console.log(filtered_list);
          console.log(this.Userlist);

          filtered_list.onlineUsers = filtered_list.onlineUsers.filter( user =>
            user.indexOf(this.search_user) != -1
          )
          filtered_list.offlineUsers = filtered_list.offlineUsers.filter( user =>
            user.indexOf(this.search_user) != -1
          )

          console.log(this.search_user);
          return filtered_list
        }
      }
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