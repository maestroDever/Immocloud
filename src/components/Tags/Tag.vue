<template>
  <b-button class="tag" @click="selectTag" ref="tag">
    {{ title }}
  </b-button>
</template>

<script>
export default {
  name: 'Tag',
  props: ['title', 'popover'],
  methods: {
    selectTag () {
      this.$emit('selectTag')
    },
    setActive () {
      this.$refs.tag.classList.add('active')
    },
    setInactive () {
      this.$refs.tag.classList.remove('active')
    }
  }
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

    &.active {
      background-color: $color-text-green !important;
      border-color: $color-text-green !important;
      outline: none;
    }
  }
</style>
