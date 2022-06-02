<template>
  <div v-for="user in users" :key="user.id">{{ user.title }}</div>
</template>

<script>
import { fetchNewsList } from '../api/index';

export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    fetchNewsList()
      .then((res) => {
        this.users = res.data;
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  },
};
</script>

<style></style>
