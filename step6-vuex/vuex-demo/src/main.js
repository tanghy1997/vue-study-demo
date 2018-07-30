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
  // 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。Vuex 中的 mutation 非常类似于事件：
  // 每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
  // 这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数：
  mutations: {
    // 你可以向 store.commit 传入额外的参数，即 mutation 的 载荷（payload）
    // 在大多数情况下，载荷应该是一个对象，这样可以包含多个字段并且记录的 mutation 会更易读：
    // increment (state, n) {
    //   // 变更状态
    //   state.count += n
    // }
    increment (state, payload) {
      state.count += payload.amount
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  },

  //通过方法来访问
  // 注意，getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果。
  // getters: {
  //   // ...
  //   getTodoById: (state) => (id) => {
  //     return state.todos.find(todo => todo.id === id)
  //   }
  // }
});

// store.getters.getTodoById(2) // -> { id: 2, text: '...', done: false }

//你不能直接调用一个 mutation handler
// 要唤醒一个 mutation handler，你需要以相应的 type 调用 store.commit 方法：
// store.commit('increment');
// store.commit('increment', 10)
store.commit('increment', {
  amount: 10
});

// 对象风格的提交方式
// store.commit({
//   type: 'increment',
//   amount: 10
// });


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
