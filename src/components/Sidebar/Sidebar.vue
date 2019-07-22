<template>
  <b-navbar
    :class="{ sidebar: true }"
  >
    <b-navbar-nav>
      <b-navbar-brand>
        immocloud
      </b-navbar-brand>
      <b-nav-item>
        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
      </b-nav-item>
      <b-nav-item>Dashboard</b-nav-item>
      <b-nav-item>Objekte</b-nav-item>
      <b-nav-item>Kontakte</b-nav-item>
      <b-nav-item>Finanzen</b-nav-item>
      <b-nav-item>Nachrichten</b-nav-item>
      <b-nav-item>Dokumente</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<style lang="scss" scoped>
@import '../../styles/variables';
  .sidebar {
    display: block;
    background-color: rgb(185, 62, 62);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    overflow-y: auto;
    width: $sidebar-width;

    ul {
      display: block;
    }
  }
</style>
