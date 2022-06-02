<template>
  <div>
    <ul class="news-list">
      <li class="post" v-for="item in this.$store.state.jobs" :key="item.id">
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <div>
          <p class="news-title">
            <a :href="item.url">
              {{ item.title }}
            </a>
          </p>
          <small class="link-text">
            {{ item.time_ago }},
            <a :href="item.url">
              {{ item.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_JOBS');
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
