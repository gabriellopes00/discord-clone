<template>
  <div class="container">
    <div class="messages">
      <ChannelMessage v-for="message  in 8" :key="message.id" authorName="Gabriel Lopes" date="22/11/2020">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, quaerat animi recusandae modi veniam accusantium quidem non officia voluptas quia minus laudantium ad eius, vel tempore quos earum porro. Aut!
      </ChannelMessage>
      <ChannelMessage ref="new" v-for="message  in 8" :key="message.id" authorName="Gabriel Lopes" date="22/11/2020">
        <Mention>Ana clara dini</Mention> hii, how are you
      </ChannelMessage>
    </div>
    <div class="input-wrapper">
      <input type="text" name="" placeholder="Write a message..." id="">
      <div class="icon">
        <At :size="24" />
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import At from 'vue-material-design-icons/At'
  import ChannelMessage from './ChannelMessage'
  import Mention from './Mention'

  export default {
    components: {
      At,
      ChannelMessage,
      Mention
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
    height: calc(100vh - 46px - 68px);
    max-height: calc(100vh - 46px - 68px);
    overflow-y: scroll;

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
</style>