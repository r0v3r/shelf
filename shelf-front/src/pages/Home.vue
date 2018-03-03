<template>
  <div>
      <navbar ref="nav" :search="vm.search" :tabs="vm.tabs"></navbar>
  </div>
</template>
<style lang="less" scoped>

</style>
<script>
export default {
  name: "Home",
  mounted() {},
  data() {
    return {
      vm: {
        search: {
          placeholder: "搜索商品",
          href: "/"
        },
        tabs: [
          { title: "推荐", active: true },
          { title: "居家" },
          { title: "服装" },
          { title: "服装" },
          { title: "服装" },
          { title: "服装" },
          { title: "服装" },
          { title: "服装" },
          { title: "服装" },
          { title: "服装" },
          { title: "服装" },
          { title: "服装" },
        ]
      }
    };
  }
};
</script>
