<template>
  <div class="container">
    <div class="icon">
      <HashTagIcon :size="22"/>
    </div>
    <h1 class="title">{{ channelName }}</h1>
    <div class="separator" />
    <div class="description">Lorem ipsum dolor sit amet...</div>
  </div>
</template>

<script>
  import HashTagIcon from 'vue-material-design-icons/Pound'

  export default {
    props: {
      channelName: String
    },
    components: {
      HashTagIcon
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    grid-area: ci;
    display: flex;
    align-items: center;
    background-color: var(--primary);
    padding: 0 17px;
    z-index: 2;
    box-shadow: rgba(0, 0, 0, 0.4) 0 1px 0 0;
  }

  .title{
    color: var(--white);
    font-size: 16px;
    letter-spacing: 2px;
    margin-left: 9px;
    font-weight: bold;
  }

  .description{
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
  }
</style>