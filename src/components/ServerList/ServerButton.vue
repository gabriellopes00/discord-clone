<template>
  <div class="server-button" :class="{
    'serverButton-hasNotifications' : hasNotifications,
    'serverButton-isHome' : isHome
    }">
    <img 
      v-if="isHome" 
      src="../../assets/images/discord-logo.svg" 
      alt="dicord-logo"
    >
    <div v-if="mentions" class="mentions">{{mentions}}</div>
  </div>
</template>

<script>
  export default {
    props: {
      selected: Boolean,
      isHome: Boolean,
      hasNotifications: Boolean,
      mentions: Number
    }
  }
</script>

<style scoped lang="scss">
  .server-button{
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 48px;
    height: 48px;

    margin-bottom: 8px;
    border-radius: 50%;

    background-color: var(--primary);
    cursor: pointer;
    position: relative;
    transition: .2s;

    &.active,
    &:hover {
      border-radius: 16px;
      background-color: var(--discord)
    }

    img{
      width: 24px;
      height: 24px;

      color: #fff
    }

    .mentions{
      background-color: var(--notification);
      
      width: auto;
      height: 24px;

      padding: 0 4px;
      bottom: -4px;
      right: -4px;

      position: absolute;
      border-radius: 12px;
      border: solid 4px var(--tertiary);
      
      text-align: right;
      font-size: 13px;
      font-weight: bold;
      color: var(--white);
    }
  }

  .serverButton-hasNotifications{
    &::before{
      content: '';      
      display: block;

      width: 9px;
      height: 9px;

      background-color: var(--white);
      position: absolute;

      left: -17px;
      top: calc(50% - 4.5px);
      border-radius: 50%;
    }
  }

  .serverButton-isHome{
    background-color: var(--quinary);

    &.active,
    &:hover{
      border-radius: 16px;
    }
  }
</style>