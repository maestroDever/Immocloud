<template>
  <section class="cards-swiper">
    <div class="container">
      <div class="cards-swiper-wrapper">
        <swiper ref="cardSwiper" :options="swiperOptions" class="card-swiper">
          <swiper-slide v-for="i in 10" :key="i">
            <card />
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination" slot="pagination"></div>
        <!-- <div class="swiper-button-prev" slot="button-prev">
          <div class="swipe-prev" @click="swiper.slidePrev()">
            Prev
          </div>
        </div> -->
        <div class="swiper-button-next" slot="button-next">
          <div class="swipe-next" @click="swiper.slideNext()">
            mehr
            <font-awesome-icon icon="chevron-right" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Card from '../Card/Card'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronRight)

export default {
  name: 'CardSwiper',
  components: { swiper, swiperSlide, Card },
  computed: {
    swiper () {
      return this.$refs.cardSwiper.swiper
    }
  },
  data () {
    return {
      swiperOptions: {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        draggable: true,
        allowTouchMove: true,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables';
  .swiper-button-next,
  .swiper-button-prev {
    background-image: none !important;
  }

  .swiper-slide {
    width: auto;
    height: auto;
  }

  .swiper-pagination {
    left: 50%;
    transform: translateX(-50%);

    &-bullet {
      width: 12px;
      height: 12px;
      margin-right: 10px;

      &:last-child {
        margin-right: 0;
      }

      &-active {
        background-color: $color-purple;
      }
    }
  }

  .swiper-button-next {
    top: 62%;
    right: 10%;
    color: $color-purple;
    width: auto;
  }
</style>

<style lang="scss">
@import '../../styles/variables';
.swiper-pagination {
  left: 50%;
  transform: translateX(-50%);
  margin-top: 2rem;

  &-bullet {
    width: 12px !important;
    height: 12px !important;
    margin-right: 10px;

    &:last-child {
      margin-right: 0 !important;
    }

    &-active {
      background-color: $color-purple !important;
    }
  }
}
</style>
