<template>
  <div class="home">
    <card />
    <tags />
    <card-swiper />
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card/Card'
import Tags from '@/components/Tags/Tags'
import CardSwiper from '@/components/Swiper/CardSwiper'

export default {
  name: 'home',
  components: {
    Card,
    Tags,
    CardSwiper
  }
}
</script>
