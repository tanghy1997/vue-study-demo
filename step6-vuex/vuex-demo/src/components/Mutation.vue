<template>
    <div>在组件中提交 Mutation</div>
</template>

<script>
    import { mapMutations } from 'vuex'
    export default {
        name: "Mutation",
        methods: {
          ...mapMutations([
              'increment',// 将 `this.increment()` 映射为 `this.$store.commit('increment')`,

              // `mapMutations` 也支持载荷：
              'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
          ])
        }
    }
</script>

<style scoped>

</style>
