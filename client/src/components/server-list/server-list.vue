<template>
  <div class="container">
    <ServerButton isHome />
    <div class="separator"></div>
    <ServerButton selected hasNotifications :mentions="3" />
    <ServerButton :mentions="9" />
    <ServerButton hasNotifications />
    <ServerButton hasNotifications :mentions="12" />
    <ServerButton />
  </div>
</template>

<script>
import ServerButton from './server-button.vue'

export default {
  components: {
    ServerButton,
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  grid-area: sl;
  background-color: var(--tertiary);

  padding: 11px 0;
  max-height: 100vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
}

.separator {
  width: 32px;
  margin-bottom: 8px;
  border-bottom: solid 2px var(--grey);
}
</style>
