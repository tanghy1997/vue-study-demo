<template>
    <div>在组件中分发 Action</div>
</template>

<script>
    // 你在组件中使用 this.$store.dispatch('xxx') 分发 action，或者使用
    // mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用
    // （需要先在根节点注入 store）：
    import { mapActions } from 'vuex'
    export default {
        name: "Action",

        methods: {
            ...mapActions([
                'increment',// 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
                 // `mapActions` 也支持载荷：
                'incrementBy',// 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`

            ]),
            ...mapActions({
                add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
            })
        }
    }
</script>

<style scoped>

</style>
