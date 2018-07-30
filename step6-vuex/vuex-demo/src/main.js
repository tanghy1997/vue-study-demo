// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Vuex from 'vuex';

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '///', done: false }
    ]
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  }
});

store.commit('increment');
console.log(store.state.count);
console.log(store.getters.doneTodos);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
