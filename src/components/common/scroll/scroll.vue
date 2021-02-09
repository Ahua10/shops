<template>
  <div class="wrapper" ref="wrapper">
                      <!-- 利用ref可以通过ref-name访问this.$refs.ref-name就能绑定到该组件或元素上 -->
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BetterScroll from '@better-scroll/core'
export default {
  name: "scrolls",
  mounted() {
  const scroll =  new BetterScroll(this.$refs.wrapper, {
      click: true,
    })

    // 监听滚动位置
    scroll.on('scroll',(position) => {
      console.log(position)
    })
  },
};
</script>
<style scoped>

</style>
