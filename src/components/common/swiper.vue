<template>
  <div id="swipers">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" />
        </a>
        </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>

      <!-- <div class="swiper-scrollbar"></div>//滚动条
    <div class="swiper-button-next"></div>//下一页
    <div class="swiper-button-prev"></div>//上一页 -->
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { getHomeData } from "./../../network/home";
import "swiper/css/swiper.css";
export default {
  name: "swipers",
  data() {
    return {
      banners: [],
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay: true,
        loop: true,
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  created() {
    getHomeData().then((res) => {
      this.banners = res.data.banner.list;
      // console.log(res.data.banner.list);
      // console.log(res.data.banner.list[0].image);
    });
  },
};
</script>
<style scoped>
#swipers img {
  width: 100%;
  height: 200px;
}
</style>
