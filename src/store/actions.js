import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchCommentItem,
} from '../api/index';

export default {
  FETCH_NEWS({ commit }) {
    fetchNewsList()
      .then(({ data }) => {
        commit('SET_NEWS', data);
        return data;
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
  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
      .then(({ data }) => {
        commit('SET_USER', data);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  FETCH_ITEM({ commit }, id) {
    fetchCommentItem(id)
      .then(({ data }) => {
        commit('SET_ITEM', data);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  START_SPINNER({ commit }) {
    commit('SET_LOADING_STATUS', true);
  },
  END_SPINNER({ commit }) {
    commit('SET_LOADING_STATUS', false);
  },
};
