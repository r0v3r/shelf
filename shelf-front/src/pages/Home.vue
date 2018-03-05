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
      <router-view></router-view>
  </div>
</template>
<script>
import NavSearch from "../components/NavSearch";
export default {
  name: "Home",
  components: {
    NavSearch
  },
  beforeCreate() {
    // redirect to recommand page for default
    if(this.$route.path === '/'){
      this.$router.push({path:'/rec'})
    }
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
            { title: "推荐", href: "/rec", selected:true },
            { title: "居家", href: "/list?category=1" },
            { title: "配件", href: "/list?category=2" },
            { title: "服装", href: "/list?category=3" },
            { title: "电器", href: "/list?category=4" },
            { title: "洗护", href: "/list?category=5" },
            { title: "饮食", href: "/list?category=6" },
            { title: "餐厨", href: "/list?category=7" },
            { title: "婴童", href: "/list?category=8" },
            { title: "文体", href: "/list?category=9" },
            { title: "特色区", href: "/special" }
          ]
        }
      }
    };
  }
};
</script>
