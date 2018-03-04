<style lang="less" scoped>
.fixed-header {
  top: 0;
  position: fixed;
}
</style>

<template>
  <div>
      <nav-search class=""
        :logo="vm.navSearch.logo"  
        :search="vm.navSearch.search"
        :nav="vm.navSearch.nav">
      </nav-search>
  </div>
</template>
<script>
import NavSearch from "../components/NavSearch";
export default {
  name: "Home",
  components: {
    NavSearch
  },
  data() {
    return {
      vm: {
        navSearch: {
          logo: {
            // text: "严选",
            href: "/",
            img: {
              src:
                "//yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png",
              width: "69px",
              height: "20px"
            }
          },
          search: {
            href: "",
            placeholder: "搜索商品"
          },
          nav: [
            { title: "推荐", href: "/rec" },
            { title: "居家", href: "/" },
            { title: "配件", href: "/" },
            { title: "服装", href: "/" },
            { title: "电器", href: "/" },
            { title: "洗护", href: "/" },
            { title: "饮食", href: "/" },
            { title: "餐厨", href: "/" },
            { title: "婴童", href: "/" },
            { title: "文体", href: "/" },
            { title: "特色区", href: "/" }
          ]
        }
      }
    };
  }
};
</script>
