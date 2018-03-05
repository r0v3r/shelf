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
  created() {
    let fullpath = this.$route.fullPath;
    this.vm.navSearch.nav.map(entry => {
      if (fullpath.includes(entry.href)) {
        entry.selected = true;
      } else {
        entry.selected = false;
      }
    });
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
            { title: "推荐", href: "/home/recommand", selected: true },
            { title: "居家", href: "/home/list?category=1", selected: false },
            { title: "配件", href: "/home/list?category=2", selected: false },
            { title: "服装", href: "/home/list?category=3", selected: false },
            { title: "电器", href: "/home/list?category=4", selected: false },
            { title: "洗护", href: "/home/list?category=5", selected: false },
            { title: "饮食", href: "/home/list?category=6", selected: false },
            { title: "餐厨", href: "/home/list?category=7", selected: false },
            { title: "婴童", href: "/home/list?category=8", selected: false },
            { title: "文体", href: "/home/list?category=9", selected: false },
            { title: "特色区", href: "/home/special", selected: false }
          ]
        }
      }
    };
  }
};
</script>
