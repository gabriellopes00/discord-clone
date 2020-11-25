<template>
  <div class="container">
    <div class="title">{{ serverName }}</div>
    <div class="icon">
      <ExpandIcon :size="28" />
    </div>
  </div>
</template>

<script>
  import ExpandIcon from 'vue-material-design-icons/ChevronDown'
  export default {
    props: {
      serverName: String
    },
    components: {
      ExpandIcon
    }
  }
</script>

<style scoped>
  .container{
    grid-area: sn;
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: var(--quaternary);

    padding: 0 11px 0 16px;
    box-shadow: rgba(0, 0, 0, .9) 0 1px 0 0;
  }

  .title{
    color: var(--white);
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 2px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .icon{
    color: var(--white);
    cursor: pointer;
  }
</style>
