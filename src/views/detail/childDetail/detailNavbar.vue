<template>
  <nav-bar class="nav-bar">
    <div slot="left" @click="backClick">
      <img style="margin-top: 12px" src="./../../../assets/img/common/back.svg" alt="" />
    </div>
    <div slot="center" class="title">
      <div
        v-for="(item, index) in titles"
        :key="index"
        class="title-item"
        :class="{ active: index === currentIndex }"
        @click="status(index)"
      >
        {{ item }}
      </div>
    </div>
  </nav-bar>
</template>

<script>
import navBar from "./../../../common/navBar";
export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    backClick() {
      this.$router.back();
    },
    status(index) {
      this.currentIndex = index;
    },
  },
  components: {
    navBar,
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.nav-bar{
  position: fixed;
  height: 50px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: #fff;
}
.title {
  display: flex;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
</style>
