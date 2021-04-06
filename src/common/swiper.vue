<template>
  <div class="swiper">
    <el-carousel trigger="click" height="200px">
      <el-carousel-item v-for="(item, index) in banners" :key="index">
         <a :href="item.link"> 
          <img :src="item.image" alt="" style="height: 200px" />
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  name: "swipe",
  data() {
    return {};
  },
  components: {},
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
.swiper {
  height: 200px;
}
</style>
