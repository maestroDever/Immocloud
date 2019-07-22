<template>
  <div class="layout">
    <Sidebar />
    <div class="wrap">
      <Header />
      <transition name="router-animation">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar/Sidebar'
import Header from '@/components/Header/Header'

export default {
  name: 'Layout',
  components: { Sidebar, Header }
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables';
  .layout {
    height: 100%;
    position: relative;
    left: 0;
  }

  .wrap {
    position: relative;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    margin-left: $sidebar-width;
  }

</style>
