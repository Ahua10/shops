<template>
   <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="./../../../assets/img/tabbar/home.svg" alt="" />
        <img slot="item-icons" src="./../../../assets/img/tabbar/homes.svg" alt="" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="./../../../assets/img/tabbar/category.svg" alt="" />
        <img slot="item-icons" src="./../../../assets/img/tabbar/categorys.svg" alt="" />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart">
        <img slot="item-icon" src="./../../../assets/img/tabbar/shoppingCart.svg" alt="" />
        <img slot="item-icons" src="./../../../assets/img/tabbar/shoppingCarts.svg" alt="" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/mine" activeColor="yellow">
        <img slot="item-icon" src="./../../../assets/img/tabbar/mine.svg" alt="" />
        <img slot="item-icons" src="./../../../assets/img/tabbar/mines.svg" alt="" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from "./../../common/TabBar/TabBar";
import TabBarItem from "./../../common/TabBar/TabBarItem";
export default {
  name:'mainTabBar',
  components:{
    TabBar,
    TabBarItem
  }
}
</script>