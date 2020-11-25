<template>
  <div class="channel-message" :class="{ hasMention : hasMention }">
    <div class="avatar" :class="{ botAvatar : isBot }" />
    <div class="message">
      <div class="user">
        <strong>{{ authorName }}</strong>
        <span class="bot" v-if="isBot">bot</span>
        <span class="date">{{ date }}</span>
      </div>
      <div class="body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      authorName: String,
      date: String,
      hasMention: Boolean,
      isBot: Boolean,
    }
  }
</script>

<style lang="scss" scoped>
  .channel-message{
    box-sizing: content-box;
    display: flex;
    align-items: center;
    padding: 8px 16px;
    margin-right: 4px;
    background-color: transparent;
    margin-top: 15px;

    &.hasMention{
      background-color: var(--mention-message);
      border-left: solid 2px var(--mention-detail);
    }
    &:hover{
      background-color: var(--secondary)
    }
  }

  .avatar{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--secondary);
    flex-shrink: 0;

    &.botAvatar{
      background-color: var(--mention-detail)
    }
  }

  .message{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 40px;
    margin-left: 17px;

    strong{
      color: var(--white);
      font-size: 16px;
      letter-spacing: 1px;
    }
    .date{
      margin-left: 6px;
      color: var(--grey);
      font-size: 13px;
    }
    .body{
      color: var(--white);
      text-align: left;
      font-size: 16px;
      margin-top: 5px;
    }
    .bot{
      margin-left: 9px;
      background-color: var(--discord);
      padding: 4px 5px;
      text-transform: uppercase;
      font-size: 11px;
      font-weight: bold;
      color: var(--white);
      border-radius: 4px;
    }
  }
</style>