<template>
  <div class="container">
    <div class="about">
      <div class="icon">
        <HashTagIcon class="iconElement" :size="24"/>
      </div>
      <h1 class="title">{{ channelName }}</h1>
      <div class="separator" />
      <div class="description">Lorem ipsum dolor sit amet...</div>
      <div class="icon action">
        <BellIcon class="iconElement" :size="24"/>   
        <PinIcon class="iconElement" :size="24"/>
        <GroupIcon class="iconElement" :size="24"/>
      </div>
    </div>
    <div class="search icon">   
      <input type="text" v-model="searchUser" name="userFind">
      <CardIcon class="iconElement" :size="24" />
      <QuestionIcon class="iconElement" :size="24"/>
    </div>
  </div>
</template>

<script>
  import HashTagIcon from 'vue-material-design-icons/Pound'
  import BellIcon from 'vue-material-design-icons/Bell'
  import PinIcon from 'vue-material-design-icons/Pin'
  import GroupIcon from 'vue-material-design-icons/AccountGroup'
  import QuestionIcon from 'vue-material-design-icons/CloudQuestion'
  import CardIcon from 'vue-material-design-icons/ChatAlert'

  export default {
    props: {
      channelName: String,
      searchUser: String
    },
    components: {
      HashTagIcon,
      BellIcon,
      QuestionIcon,
      GroupIcon,
      PinIcon,
      CardIcon
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    grid-area: ci;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--primary);
    padding: 0 17px;
    z-index: 2;
    box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0 0;
  }

  .about{
    display: flex;
  }
  .action{
    margin-left: 600px;
  }
  .about .title{
    color: var(--white);
    font-size: 16px;
    letter-spacing: 2px;
    margin-left: 9px;
    font-weight: bold;
  }

  .about .description{
    color: var(--grey);
    font-size: 15px;
  }

  .separator{
    background-color: var(--grey);
    height: 24px;
    width: 1px;
    margin: 0 13px;
  }

  .icon{
    color: var(--grey);

    .iconElement{
      margin-right: 5px;
      cursor: pointer;
      transition: .2s;

      &:hover{
        color: var(--white);
      }
    }
  }

  .search{
    display: flex;
    align-items: center; 

    input{
      width: 160px;
      height: 24px;
      padding: 0 5px ;
      border-radius: 5px;
      color: var(--white);
      background-color: var(--chat-input);
      margin-right: 10px;

      &::placeholder{
        color: var(--grey);
        font-size: 16px;
      }
    }
  }
</style>