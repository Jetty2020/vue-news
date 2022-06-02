import { createStore } from 'vuex';
import { fetchNewsList, fetchJobsList, fetchAskList } from '../api/index';

export const store = createStore({
  state: {
    news: [],
    jobs: [],
    ask: [],
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
    },
    SET_JOBS(state, jobs) {
      state.jobs = jobs;
    },
    SET_ASK(state, ask) {
      state.ask = ask;
    },
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    },
  },
  actions: {
    FETCH_NEWS({ commit }) {
      fetchNewsList()
        .then(({ data }) => {
          commit('SET_NEWS', data);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    FETCH_JOBS({ commit }) {
      fetchJobsList()
        .then(({ data }) => {
          commit('SET_JOBS', data);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    FETCH_ASK({ commit }) {
      fetchAskList()
        .then(({ data }) => {
          commit('SET_ASK', data);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
});
