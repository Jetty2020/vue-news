<template>
  <tool-bar></tool-bar>
  <transition name="page">
    <router-view />
  </transition>
  <spinner-item :loading="loadingStatus"></spinner-item>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import SpinnerItem from './components/SpinnerItem.vue';

export default {
  components: {
    ToolBar,
    SpinnerItem,
  },
  computed: {
    loadingStatus() {
      return this.$store.state.loadingStatus;
    }
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline;
}
/* Router transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
