<template>
  <div>
    <ul class="news-list">
      <li class="post" v-for="item in fetchedAsk" :key="item.id">
        <div class="points">
          {{ item.points }}
        </div>
        <div>
          <p class="news-title">
            <router-link :to="`/item/${item.id}`">
              {{ item.title }}
            </router-link>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link :to="`/user/${item.user}`">
              {{ item.user }}
            </router-link>
          </small>
        </div>
      </li>
    </ul>
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

<style scoped>
.news-list {
  display: list-item;
}
.post {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  list-style: none;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>
