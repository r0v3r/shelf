<template>
  <div class="tab-bar">
      <tabbar>
        <tabbar-item v-for="(tab, index) in tabs"
        :key="index" :selected="tab.selected" :link="tab.link">
          <img v-if="tab.selected" slot="icon" :src="tab.img.selected">
          <img v-else slot="icon" :src="tab.img.normal">
        </tabbar-item>
        <span>{{tab.label}}</span>
      </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vux";
export default {
  name: "TabBottom",
  data() {
    return {
      selected: [false, false, false, false, false],
      tabs: [
        {
          label: "首页",
          link: "/home",
          selected: false,
          img: {
            normal: "../assets/tab-normal/home.svg",
            selected: "../assets/tab-active/home.svg"
          }
        },
        {
          label: "发现",
          link: "/discover",
          selected: false,
          img: {
            normal: "../assets/tab-normal/discover.svg",
            selected: "../assets/tab-active/discover.svg"
          }
        },
        {
          label: "分类",
          link: "/category",
          selected: false,
          img: {
            normal: "../assets/tab-normal/category.svg",
            selected: "../assets/tab-active/category.svg"
          }
        },
        {
          label: "购物车",
          link: "/cart",
          selected: false,
          img: {
            normal: "../assets/tab-normal/cart.svg",
            selected: "../assets/tab-active/cart.svg"
          }
        },
        {
          label: "我的",
          link: "/user",
          selected: false,
          img: {
            normal: "../assets/tab-normal/my.svg",
            selected: "../assets/tab-active/my.svg"
          }
        }
      ]
    };
  },
  components: {
    Tabbar,
    TabbarItem
  },
  mounted() {},
  methods: {
    setActiveTab(index) {
      this.selected = [false, false, false, false, false];
      this.selected[index] = true;
    },
    onRouteChange(fullpath) {
      this.tabs.map(tab => {
        if (fullpath.includes(tab.link)) {
          tab.selected = true;
        } else {
          tab.selected = false;
        }
      });
    }
  }
};
</script>


<style lang="less" scoped>
.tab-bar img {
  width: 27px;
  height: 27px;
}
.tab-bar span {
  font-size: 14px;
}
.tab-bar[selected="true"] span {
  color: red !important;
}
</style>

