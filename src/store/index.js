import { createStore } from 'vuex';
import mutations from './mutations';
import actions from './actions';

export const store = createStore({
  state: {
    news: [],
    jobs: [],
    ask: [],
  },
  mutations,
  getters: {
    fetchedAsk(state) {
      return state.ask;
    },
  },
  actions,
});
