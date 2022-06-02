<template>
  <div v-for="item in this.$store.state.ask" :key="item.id">
    {{ item.title }}
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_ASK');
  },
};
</script>

<style></style>
