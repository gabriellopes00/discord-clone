<template>
  <div class="list-container">
    <div class="category">
      <div>Channel List</div>
      <div class="category-icon">
        <AddCategoryIcon :size="21" />
      </div>
    </div>
    <ChannelButton selected channelName="first channel" />     
    <ChannelButton channelName="second channel" />    
    <ChannelButton channelName="third channel" />
  </div>
</template>

<script>
  import AddCategoryIcon from 'vue-material-design-icons/Plus'
  import ChannelButton from './ChannelButton'
  export default {
    components: {
      AddCategoryIcon,
      ChannelButton
    }
  }
</script>

<style lang="scss" scoped>
  .list-container {
    grid-area: cl;

    display: flex;
    flex-direction: column;

    padding: 24px 10px 0 16px;
    background-color: var(--secondary);
  }

  .category{
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 6px;
    color: var(--grey);
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;

    .category-icon{
      color: var(--symbol);
      cursor: pointer;
    }
  }
</style>