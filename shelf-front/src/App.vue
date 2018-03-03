<style lang="less">
.wrapper {
  margin-bottom: 1.5rem;
}
</style>

<template>
  <div id="app">
    <router-view class="wrapper"/>
    <tabbar :tabs="vm.tabbar.tabs"></tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      vm: {
        tabbar: {
          tabs: [
            { title: "首页", icon: "fa fa-home", href: "/", active: true },
            { title: "发现", icon: "fa fa-eye", href: "/discover" },
            { title: "购物车", icon: "fa fa-shopping-cart", href: "/cart" },
            { title: "个人", icon: "fa fa-user", href: "/me" }
          ]
        }
      }
    };
  },
  beforeCreate() {
    let clientWidth = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = clientWidth / 10 + "px";
  }
};
</script>
