<template>
  <div class="container">
    <ServerButton isHome/>
    <div class="separator"></div>
    <ServerButton :mentions="3"/>
    <ServerButton />
    <ServerButton />
    <ServerButton hasNotifications/>
    <ServerButton :mentions="343"/>
    <ServerButton />
    <ServerButton :mentions="32"/>
    <ServerButton />
    <ServerButton />
    <ServerButton hasNotifications/>
    <ServerButton :mentions="343"/>
    <ServerButton />
    <ServerButton :mentions="32"/>
    <ServerButton />
    <ServerButton />
    <ServerButton hasNotifications/>
    <ServerButton :mentions="343"/>
    <ServerButton />
    <ServerButton :mentions="32"/>
    <ServerButton />
    <ServerButton />
    <ServerButton hasNotifications/>
    <ServerButton :mentions="343"/>
    <ServerButton />
    <ServerButton :mentions="32"/>
    <ServerButton />
    <ServerButton />
    <ServerButton hasNotifications/>
    <ServerButton :mentions="343"/>
    <ServerButton />
    <ServerButton :mentions="32"/>
    <ServerButton />
    <ServerButton />
    <ServerButton hasNotifications/>
    <ServerButton :mentions="343"/>   

  </div>
</template>

<script>
  import ServerButton from './ServerButton.vue'
  export default {
    components: {
      ServerButton
    }
  }
</script>

<style scoped lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;

    grid-area: sl;

    background-color: var(--tertiary);

    padding: 11px 0;
    max-height: 100vh;

    overflow-y: scroll;
    &::-webkit-scrollbar{
      display: none;
    }
  }

  .separator{
    width: 32px;
    
    margin-bottom: 8px;
    border-bottom: solid 2px var(--grey);
  }
</style>