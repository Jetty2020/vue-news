<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';

export default {
  components: {
    ListItem,
  },
  created() {
    this.$store.dispatch('START_SPINNER');
    this.$store
      .dispatch('FETCH_NEWS')
      .then(() => {
        this.$store.dispatch('END_SPINNER');
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
</script>
