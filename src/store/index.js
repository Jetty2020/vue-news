import { createStore } from 'vuex';
import { fetchNewsList } from '../api/index';

export const store = createStore({
  state: {
    news: [],
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
    }
  },
  actions: {
    FETCH_NEWS(ctx) {
      fetchNewsList()
        .then((res) => {
          console.log(res.data);
          ctx.commit('SET_NEWS', res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
});
