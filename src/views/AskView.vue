<template>
  <div v-for="item in fetchedAsk" :key="item.id">
    {{ item.title }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['fetchedAsk']),
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  },
};
</script>

<style></style>
