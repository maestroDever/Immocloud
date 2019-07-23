<template>
  <b-button class="tag">
    {{ title }}
  </b-button>
</template>

<script>
export default {
  name: 'Tag',
  props: ['title', 'popover']
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables';
  .tag {
    height: 2.3rem;
    border-radius: 15px;
    background: transparent;
    color: $color-text-green;
    border: 1px solid $color-text-green;
    padding: 0 1rem;
    margin: .8rem;

    &:active {
      background-color: $color-text-green !important;
      border-color: $color-text-green !important;
      outline: none;
    }

    &:focus {
      outline: none !important;
    }
  }
</style>
