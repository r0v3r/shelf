<template>
  <div class="tab-bar">
      <tabbar>
        <tabbar-item selected>
          <img slot="icon-active" src="../assets/icon_active/all.svg">
          <img slot="icon" src="../assets/icon_nomal/all.svg">
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item>
          <img slot="icon-active" src="../assets/icon_active/earth.svg">
          <img slot="icon" src="../assets/icon_nomal/earth.svg">
          <span slot="label">发现</span>
        </tabbar-item>
        <tabbar-item>
          <img slot="icon-active" src="../assets/icon_active/Category.svg">
          <img slot="icon" src="../assets/icon_nomal/Category.svg">
          <span slot="label">分类</span>
        </tabbar-item>
        <tabbar-item>
          <img slot="icon-active" src="../assets/icon_active/cart.svg">
          <img slot="icon" src="../assets/icon_nomal/cart.svg">
          <span slot="label">购物车</span>
        </tabbar-item>
        <tabbar-item>
          <img slot="icon-active" src="../assets/icon_active/account.svg">
          <img slot="icon" src="../assets/icon_nomal/account.svg">
          <span slot="label">我的</span>
        </tabbar-item>
      </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vux";
export default {
  name: "TabBottom",
  data() {
    return {
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

