<template>
  <div id="home">
    <nav-bar class="home_nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content">
      <swiper></swiper>
      <recommend-view :recommend="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control class="tab-control" :titles="['流行', '新款', '精选']"></tab-control>

      <ul>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
        <li>22</li>
        <li>11</li>
        <li>11</li>
        <li>11</li>
      </ul>
    </scroll>

    <ul>
      <li>hdlsa</li>
      <li>hdlsa</li>
      <li>hdlsa</li>
      <li>hdlsa</li>
      <li>hdlsa</li>
    </ul>
  </div>
</template>
<script>
import navBar from "./../../components/common/navbar/navBar";
import swiper from "./../../components/common/swiper";
import tabControl from "./../../components/content/tabControl/tabControl";
import scroll from "./../../components/common/scroll/scroll";

import recommendView from "./childs/recomment";
import featureView from "./childs/feature";

import { getHomeData } from "./../../network/home";

export default {
  name: "home",
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  components: {
    navBar,
    swiper,
    tabControl,
    scroll,
    recommendView,
    featureView,
  },
  created() {
    getHomeData().then((res) => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      console.log(res.data.recommend.list);
    });
  },
};
</script>
<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.home_nav {
  background-color: var(--color-tint);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
}
.content {
  height: 300px;
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
}
</style>
