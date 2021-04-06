<template>
  <div id="home"   v-infinite-scroll="load" style="overflow:auto">
    <el-backtop target="#home" style="right: 20px;bottom: 60px;"></el-backtop>
    <mt-header fixed title="女人街" style="z-index:10;"></mt-header>
    <!-- <Scroll class="content"> -->
    <div class="content">
      <Swiper :banners="banners" />
      <Recommend-view :recommend="recommends" />
      <Feature-view />
      <Tab-control
        class="tab-control"
        @tabClick="tabClick"
        :titles="['流行', '热销', '上新']"
      />
      <Goods-list :goods="showGoods"/>
    </div>
    <!-- </Scroll> -->
    <!-- <Backtop/> -->
  </div>
</template>
<script>
import { getHomeData, getHomeGoods } from "./../../network/home";
import Swiper from "./../../common/swiper";
import TabControl from "./../../common/TabControl";
import Scroll from "./../../common/scroll";

import RecommendView from "./../../common/home/recommend";
import FeatureView from "./../../common/home/featureView";
import GoodsList from "./../../common/home/goods/GoodsList";

export default {
  name: "home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  components: {
    Swiper,
    TabControl,
    Scroll,

    RecommendView,
    FeatureView,
    GoodsList,
  },
  created() {
    this.getHomeData();

    this.getHomeGoods("new");
    this.getHomeGoods("pop");
    this.getHomeGoods("sell");
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    load() {
      this.getHomeGoods(this.currentType)
    },
    /**
     * 网络请求方法
     *
     */
    getHomeData() {
      getHomeData().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        // res.data.banner.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        console.log(type, res.data.list);
      });
    },
  },
};
</script>
<style scoped>
#home {
  padding-top: 40px;
  height: 100vh;
  position: relative;
}

.tab-control {
  position: sticky;
  top: 40px;
  z-index: 9;
}
.content {
  overflow: hidden;

  /* position: absolute;
  top: 40px;
  bottom: 49px;
  left: 0;
  right: 0; */
}
</style>
