<template>
  <div class="mine">
    <!-- 头部 -->
    <headers title="我的喵喵"></headers>

    <!-- 中间层 -->
    <div id="content">
      <login></login>
    </div>
    <!-- 底部 -->
    <footers></footers>
  </div>
</template>
<script>
export default {
  name: "mine",
  components: {
    headers: () =>
      import(/* webpackChunkName: 'CommonBase' */ "@/components/headers"),
    footers: () =>
      import(/* webpackChunkName: 'CommonBase' */ "@/components/footers"),
    login: () =>
      import(/* webpackChunkName: 'CommonBase' */ "@/components/login")
  }
};
</script>
<style scoped>
</style>