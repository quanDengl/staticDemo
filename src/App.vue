<template>
  <div id="app">
    <!-- 头部 -->
    <van-nav-bar title="我的影院" left-text="返回" left-arrow @click-left="onClickLeft" />

    <!-- 内容 -->
    <router-view />

    <!-- 底部 -->
    <van-tabbar v-model="active" active-color="rgb(255, 83, 83)">
      <van-tabbar-item icon="home-o">猫眼电影</van-tabbar-item>
      <van-tabbar-item icon="search">猫眼城市</van-tabbar-item>
      <van-tabbar-item icon="friends-o">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      active: 0
    };
  },
  methods: {
    onClickLeft() {
      console.log("返回");
    }
  }
};
</script>
<style lang="scss" scoped>
#app {
  .van-nav-bar {
    background-color: rgb(255, 83, 83);
    .van-nav-bar__left {
      .van-icon {
        color: #fff;
      }
      .van-nav-bar__text {
        color: #fff;
      }
    }
    .van-nav-bar__title {
      color: #fff;
    }
  }
}
</style>