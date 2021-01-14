<template>
  <!-- Layout -->
  <div class="container">
    <div class="icon">
      <HashTagIcon class="iconElement" :size="24" />
    </div>
    <h1 class="title">{{ channelName }}</h1>
    <div class="separator" />
    <div class="description">Lorem ipsum dolor sit amet...</div>

    <input type="text" name="search" />
  </div>
</template>

<script>
import HashTagIcon from 'vue-material-design-icons/Pound'

export default {
  props: {
    channelName: String,
  },
  components: {
    HashTagIcon,
  },
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
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0 0;

  input {
    width: 230px;
    height: 24px;
    border-radius: 5px;
    padding: 0 7px;
    color: var(--white);
    background-color: var(--chat-input);
    position: absolute;
    right: 10px;

    &::placeholder {
      color: var(--grey);
    }
  }
}

.title {
  color: var(--white);
  font-size: 16px;
  letter-spacing: 2px;
  margin-left: 9px;
  font-weight: bold;
}

.description {
  color: var(--grey);
  font-size: 15px;
}

.separator {
  background-color: var(--grey);
  height: 24px;
  width: 1px;
  margin: 0 13px;
}

.icon {
  color: var(--grey);

  .iconElement {
    margin-right: 5px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      color: var(--white);
    }
  }
}

.search {
  display: flex;
  align-items: center;

  input {
    width: 160px;
    height: 24px;
    padding: 0 5px;
    border-radius: 5px;
    color: var(--white);
    background-color: var(--chat-input);
    margin-right: 10px;

    &::placeholder {
      color: var(--grey);
      font-size: 16px;
    }
  }
}
</style>
