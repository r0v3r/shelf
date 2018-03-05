<template>
  <div id="app">
    <router-view></router-view>
    <tab-bottom ref="tab" id="tab">
    </tab-bottom>
  </div>
</template>

<script>
import TabBottom from "@/components/TabBottom";
export default {
  name: "app",
  components: { TabBottom },
  created() {
    let fullpath = this.$route.fullPath;
    this.vm.tabbar.map(tab => {
      if (fullpath.includes(tab.href.replace("#", ""))) {
        tab.active = true;
      } else {
        tab.active = false;
      }
    });
    console.log(this.vm.tabbar);
  },
  data() {
    return {
      vm: {
        tabbar: [
          {
            label: "首页",
            icon: "fa fa-home",
            href: "#/home",
            active: true
          },
          { label: "发现", icon: "fa fa-compass", href: "#/discover" },
          { label: "分类", icon: "fa fa-reorder", href: "#/category" },
          { label: "购物车", icon: "fa fa-shopping-cart", href: "#/cart" },
          { label: "我的", icon: "fa fa-user", href: "#/user" }
        ]
      }
    };
  },
  watch: {
    $route: function() {
      let fullPath = this.$route.fullpath;
      console.log(fullPath);
      // this.$refs.tab.onRouteChange(fullPath);
    }
  }
};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";

body {
  background-color: #fbf9fe;
}
</style>
