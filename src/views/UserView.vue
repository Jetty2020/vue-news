<template>
  <div>
    <user-profile>
      <template v-slot:username>
        <div>
          {{ userInfo.id }}
        </div>
      </template>
      <template v-slot:time>{{ userInfo.created }}</template>
      <template v-slot:karma>
        <div>
          {{ userInfo.karma }}
        </div>
      </template>
    </user-profile>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
export default {
  components: {
    UserProfile,
  },
  computed: {
    userInfo() {
      return this.$store.state.user;
    },
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userName);
  },
};
</script>
