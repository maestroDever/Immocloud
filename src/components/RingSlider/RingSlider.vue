<template>
  <div class="circle-slider-wrapper">
    <circle-slider
      v-model="val"
      :circle-width="10"
      :progress-width="10"
      :knob-radius="1"
      :side="200"
      circle-color="#999"
      progress-color="#62a6a2"
    >
    </circle-slider>
    <span class="circle-slider-wrapper__text">
      <span class="title">
        {{ val }} %
      </span>
      <span class="comment">
        {{ comment }}
      </span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'RingSlider',
  props: ['val', 'percentage', 'comment']
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables';

  .circle-slider-wrapper {
    position: relative;
    display: inline-block;
    text-align: center;

    div {
      display: inline-block;
      transform: rotate(180deg);
      transform-origin: center;
    }

    &__text {
      position: absolute;
      display: flex;
      flex-direction: column;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      .title {
        font-size: 3rem;
      }

      .comment {
        text-transform: uppercase;
        font-size: $font-size-sm;
      }
    }
  }
</style>
