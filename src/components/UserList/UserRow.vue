<template>
  <div class="user-role">
    <div class="avatar" :class="{ botAvatar : isBot }"></div>
    <strong>{{ nickName }}</strong>
    <div class="bot" v-if="isBot">bot</div>
  </div>
</template>

<script>
  export default {
    props: {
      isBot: Boolean,
      nickName: String
    }
  }
</script>

<style lang="scss" scoped>
  .user-role{display: flex;
  margin-top: 5px;
  padding: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  background: transparent;
  transition: all ease-out 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  strong {
    margin-left: 13px;
    font-weight: 500;
    color: var(--white);
    opacity: 0.7;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .bot {
    margin-left: 9px;
    background-color: var(--discord);
    color: var(--white);
    padding: 4px 5px;
    border-radius: 4px;
    text-transform: uppercase;
    font-size: 11px;
    font-weight: bold;
  }

  .avatar {
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    background-color: var(--primary);
    border-radius: 50px;
  }

  .botAvatar {
    background-color: var(--mention-detail);
  }
}
</style>