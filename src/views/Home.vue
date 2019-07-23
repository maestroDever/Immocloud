<template>
  <div class="home">
    <card />
    <tags />
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card/Card'
import Tags from '@/components/Tags/Tags'

export default {
  name: 'home',
  components: {
    Card,
    Tags
  }
}
</script>
