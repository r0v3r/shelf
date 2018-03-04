<style lang="less" scoped>
header {
  box-sizing: border-box;
  background: #fff;
  color: #333;
}
.search-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  padding: 8px 16px;
  box-sizing: border-box;
}
.search-bar .logo {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  background-size: cover;
  background-position: center;
  color: #333;
  margin-right: 16px;
}
.search-bar .search {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ededed;
  height: 28px;
  box-sizing: border-box;
  border-radius: 4px;
  color: #666;
}
.search *:not(:last-child) {
  margin-right: 16px;
}
.tab {
  width: 800px;
}
</style>

<template>
<header>
    <div class="search-bar">
        <a class="logo" :href="logo.href">
            <span v-if="logo.text">{{logo.text}}</span>
            <img v-if="logo.img" :src="logo.img.src" :width="logo.img.width" :height="logo.img.height">
        </a>
        <a class="search" :href="search.href">
            <i class="fa fa-search"></i>
            <span>{{ search.placeholder}}</span>
        </a>
    </div>
    <!-- <scroller lock-y :scrollbar-x=false>
      <div class="navbar">
        <div class="nav-tab" v-for="i in 7" :key="i"><span>{{' ' + i + ' '}}</span></div>
      </div>
    </scroller> -->
    <scroller lock-y :scrollbar-x=false>
      <tab class="tab">
        <tab-item v-for="(item, key) in nav" :key="key" @on-item-click="onItemClick">{{ item.title }}</tab-item>
      </tab>
    </scroller>
</header>
</template>

<script>
import { Scroller, Tab, TabItem } from "vux";
export default {
  name: "NavSearch",
  components: {
    Scroller,
    Tab,
    TabItem
  },
  props: ["logo", "search", "nav"],
  data() {
    return {
      height: 30
    };
  },
  computed: {},
  methods: {
    onItemClick(index) {
      this.$router.push({
        path: this.nav[index].href
      });
    }
  }
};
</script>

