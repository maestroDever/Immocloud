<template>
  <div class="home">
    <card />
    <tags />
    <card-swiper />
    <ring-slider :val="68" comment="Mieter haben bezahlt" />
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card/Card'
import Tags from '@/components/Tags/Tags'
import CardSwiper from '@/components/Swiper/CardSwiper'
import RingSlider from '@/components/RingSlider/RingSlider'

export default {
  name: 'home',
  components: {
    Card,
    Tags,
    CardSwiper,
    RingSlider
  }
}
</script>
