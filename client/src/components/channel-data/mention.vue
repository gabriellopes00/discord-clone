<template>
  <span class="mention">
    <slot />
  </span>
</template>

<style lang="scss" scoped>
.mention {
  color: var(--link);
  cursor: pointer;
  margin-right: 6px;

  &:hover {
    text-decoration: underline;
  }
}
</style>
