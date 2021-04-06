<template>
  <div class="category">
    <detail-navbar :titles="titles" />
    <detail-swiper :topImages="topImages" />
    <detail-info :goods="goods" />
    <detail-shop-info :shop="shop" />
  </div>
</template>

<script>
import detailNavbar from "./childDetail/detailNavbar";
import getDetail from "./../../network/detail";
import Shop from "./../../network/detail";
import detailSwiper from "./childDetail/detailSwiper";
import detailInfo from "./childDetail/detailInfo";
import detailShopInfo from "./childDetail/detailShopInfo";
export default {
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      iid: "",
      topImages: [],
      goods: {
        title: "",
        desc: "",
        newPrice: "",
        oldPrice: "",
        discount: "",
        columns: "",
        services: "",
        realPrice: "",
      },
      shop: {
        logo: "",
        name: "",
        fans: "",
        sells: "",
        score: "",
        goodsCount: "",
      },
    };
  },
  components: {
    detailNavbar,
    detailSwiper,
    detailInfo,
    detailShopInfo,
  },
  methods: {},
  created() {
    // console.log(this.$route.params.iid);
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then((res) => {
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      this.goods.title = data.itemInfo.title;
      this.goods.desc = data.itemInfo.desc;
      this.goods.newPrice = data.itemInfo.price;
      this.goods.oldPrice = data.itemInfo.oldPrice;
      this.goods.discount = data.itemInfo.discountDesc;
      this.goods.columns = data.columns;
      this.goods.services = data.shopInfo.services;
      this.goods.realPrice = data.itemInfo.lowNowPrice;

      const shops = data.shopInfo;
      this.shop.logo = shops.shopLogo;
      this.shop.name = shops.name;
      this.shop.fans = shops.cFans;
      this.shop.sells = shops.cSells;
      this.shop.score = shops.score;
      this.shop.goodsCount = shops.cGoods;
      console.log(this.shop);
    });
  },
};
</script>

<style scoped>
.category {
  margin-top: 50px;
}
</style>
