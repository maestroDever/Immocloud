<template>
  <div class="layout">
    <Sidebar />
    <transition name="router-animation">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar/Sidebar'

export default {
  name: 'Layout',
  components: { Sidebar }
}
</script>

<style lang="scss" scoped>
  @import './Layout.scss';
</style>
