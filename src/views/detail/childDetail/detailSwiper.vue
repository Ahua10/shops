<template>
  <div class="swiper">
    <el-carousel indicator-position="outside" style="height: 300px; overflow: hidden">
      <el-carousel-item v-for="(item, index) in topImages" :key="index">
        <img :src="item" alt="" style="width: 100%" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "detailSwiper",
  data() {
    return {};
  },
  props:{
    topImages:{
      type:Array,
      default() {
        return []
      }
    }
  }
};
</script>

<style scoped>
.swiper {
  height: 300px;
}
</style>
