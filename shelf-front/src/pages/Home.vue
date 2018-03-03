<template>
  <div>
      <navbar ref="nav" 
        :search="vm.navbar.search" 
        :tabs="vm.navbar.tabs">
      </navbar>
      <router-view class="contents"></router-view>
  </div>
</template>
<style lang="less" scoped>
.contents {
  margin-top: 2rem;
}
</style>
<script>
export default {
  name: "Home",
  beforeCreate() {
    if (this.$route.fullPath === "/") {
      this.$router.push({ path: "rec" });
    }
  },
  mounted() {},
  data() {
    return {
      vm: {
        navbar: {
          search: {
            placeholder: "搜索商品",
            href: "/search"
          },
          tabs: [
            { title: "推荐", href: "/rec", active: true },
            { title: "居家", href: "/item/list?category=1" },
            { title: "服装", href: "/item/list?category=2" },
            { title: "服装", href: "/item/list?category=3" },
            { title: "服装", href: "/item/list?category=4" }
          ]
        }
      }
    };
  },
  methods: {
  }
};
</script>
