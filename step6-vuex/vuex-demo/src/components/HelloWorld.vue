<template>
  <div class="hello">

  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  // computed: {
  // count () {
  //   return this.$store.state.count
  // }
  // }

  // ...
  // computed: mapState({
  //     // 箭头函数可使代码更简练
  //     count: state => state.count,
  //
  //     // 传字符串参数 'count' 等同于 `state => state.count`
  //     countAlias: 'count',
  //
  //     // 为了能够使用 `this` 获取局部状态，必须使用常规函数
  //     countPlusLocalState (state) {
  //       return state.count + this.localCount
  //     }
  //   })

  computed: {
    localComputed () { /* ... */ },
    // 使用对象展开运算符将此对象混入到外部对象中
    ...mapState({
      // ...
    }),
    ...mapGetters([
      'doneTodosCount',
      'anotherGetter',
      // ...
    ]),
    // 如果你想将一个 getter 属性另取一个名字，使用对象形式：
    // mapGetters({
    //              // 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`
    //              doneCount: 'doneTodosCount'
    //            })
  }

}
// mapGetters 辅助函数
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
