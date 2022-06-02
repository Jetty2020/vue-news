<template>
  <div v-for="item in ask" :key="item.id">{{ item.title }}</div>
</template>

<script>
import { fetchAskList } from '../api/index';
export default {
  data() {
    return {
      ask: [],
    };
  },
  created() {
    fetchAskList()
      .then((res) => {
        this.ask = res.data;
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
</script>

<style></style>
