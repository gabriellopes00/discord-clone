<template>
  <div class="container" :class="{ active : selected }">
    <div class="channel-info">
      <HashTagIcon class="hashIcon" :size="20" />
      <div>{{channelName}}</div>    
    </div>
    <div class="channel-actions">
      <InviteIcon class="icon-actions" :size="16" />
      <SettingIcon class="icon-actions" :size="16" />
    </div>
  </div>
</template>

<script>
  import HashTagIcon from 'vue-material-design-icons/Pound'
  import InviteIcon from 'vue-material-design-icons/AccountPlus'
  import SettingIcon from 'vue-material-design-icons/CogOutline'

  export default {
    components: {
      HashTagIcon,
      InviteIcon,
      SettingIcon
    },
    props: {
      channelName: String,
      selected: Boolean
    }
  }
</script>

<style lang="scss" scoped>
  .container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;
    border-radius: 5px;
    margin-bottom: 5px;
    padding: 5px;

    background-color: transparent;
    transition: all ease-out 0.2s;
  
    div {
      display: flex;
      justify-content: center
    }

    .channel-info{
      div {
        color: var(--senary);
        margin-left: 5px;
      }
      .hashIcon {
        color: var(--symbol);
      }
    }

    .channel-actions{
      display: none;
      .icon-actions {
        color: var(--symbol);
        transition: all ease-out 0.2s;
        margin-left: 4px;
        &:hover {
          color: var(--white);
        }
      }
    }

    &.active,
    &:hover {
      background-color: var(--quinary);
      .channel-info {
        div {
          color: var(--white);
        }
      }
      .channel-actions {
        display: flex;
      }
    }
  }
</style>