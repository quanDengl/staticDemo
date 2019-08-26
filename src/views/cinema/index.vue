<template>
  <div class="cinema">
    <!-- 头部 -->
    <headers title="喵喵影院"></headers>

    <!-- 中间层 -->
    <div id="content">
      <div class="cinema_menu">
        <div class="city_switch">
          全城
          <i class="iconfont icon-lower-triangle"></i>
        </div>
        <div class="brand_swtich">
          品牌
          <i class="iconfont icon-lower-triangle"></i>
        </div>
        <div class="feature_switch">
          特色
          <i class="iconfont icon-lower-triangle"></i>
        </div>
      </div>
      <cilist></cilist>
    </div>

    <!-- 底部 -->
    <footers></footers>
  </div>
</template>
<script>
export default {
  name: "cinema",
  components: {
    headers: () =>
      import(/* webpackChunkName: 'CommonBase' */ "@/components/headers"),
    footers: () =>
      import(/* webpackChunkName: 'CommonBase' */ "@/components/footers"),
    cilist: () =>
      import(/* webpackChunkName: 'CommonBase' */ "@/components/cilist")
  }
};
</script>
<style scoped>
#content .cinema_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
}
</style>