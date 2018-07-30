import Vuex from 'Vuex';
import { SOME_MUTATION } from './mutation-types'


const store = new Vuex.Store({
    state: {},

    mutations: {
      // 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
      [SOME_MUTATION] (state) {
        // mutate state
      },

      // Mutation 必须是同步函数,所以这个是错误的
      someMutation (state) {
        api.callAsyncMethod(() => {
          state.count++
        })
      }
    },

    // Action 类似于 mutation，不同在于：
    // Action 提交的是 mutation，而不是直接变更状态。
    // Action 可以包含任意异步操作。
    // Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，
    // 因此你可以调用 context.commit 提交一个 mutation，或者
    // 通过 context.state 和 context.getters 来获取 state 和 getters
    actions: {
      increment(context) {
        context.commit('increment')
      },
      //我们会经常用到 ES2015 的 参数解构 来简化代码
      // increment ({ commit }) {
      //   commit('increment')
      // }


      //我们可以在 action 内部执行异步操作：
      incrementAsync ({ commit }) {
        setTimeout(() => {
          commit('increment')
        }, 1000)
      },


      // 组合Action
      actionA ({ commit }) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            commit('someMutation');
            resolve()
          }, 1000)
        })
      },

      // 在另外一个 action 中也可以：
      actionB ({ dispatch, commit }) {
        return dispatch('actionA').then(() => {
          commit('someOtherMutation')
        })
      },


      // 利用 async / await，我们可以如下组合 action：
      async actionC({ commit }) {
        commit('goData', await getData())
      },
      async actionD ({ dispatch, commit }) {
        await dispatch('actionC') // 等待 actionA 完成
        commit('gotOtherData', await getOtherData())
      }

    },

});

store.dispatch('actionA').then(() => {
  //...
});

// 分发 Action
store.dispatch('increment');

// Actions 支持同样的载荷方式和对象方式进行分发：
// 以载荷形式分发
store.dispatch('incrementAsync', {
  amount: 10
});

// 以对象形式分发
store.dispatch({
  type: 'incrementAsync',
  amount: 10
});
