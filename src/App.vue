<template>
  <div id="app">
    <keep-alive>
      <tab-bar>
        <tab-bar-item path="/home">
          <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="" />
          <img slot="item-icons" src="./assets/img/tabbar/homes.svg" alt="" />
          <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/category">
          <img slot="item-icon" src="./assets/img/tabbar/category.svg" alt="" />
          <img slot="item-icons" src="./assets/img/tabbar/categorys.svg" alt="" />
          <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/shopcart">
          <img slot="item-icon" src="./assets/img/tabbar/shoppingCart.svg" alt="" />
          <img slot="item-icons" src="./assets/img/tabbar/shoppingCarts.svg" alt="" />
          <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/mine">
          <img slot="item-icon" src="./assets/img/tabbar/mine.svg" alt="" />
          <img slot="item-icons" src="./assets/img/tabbar/mines.svg" alt="" />
          <div slot="item-text">我的</div>
        </tab-bar-item>
      </tab-bar>
      </keep-alive
    >
    <router-view></router-view>
  </div>
</template>
<script>
import TabBar from "./components/TabBar/TabBar";
import TabBarItem from "./components/TabBar/TabBarItem";
export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>
<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
