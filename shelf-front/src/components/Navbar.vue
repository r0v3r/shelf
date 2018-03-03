<style lang="less" scoped>
@import (reference) url("../themes/default.less");
.navbar {
  position: fixed;
  top: 0;
  height: 2rem;
  width: 100%;
  background-color: @wrapper-bg-color;
}
.searchbar {
  font-size: @font-size-lg;
  padding: 0 0.4rem;
  height: 1.2rem;
  display: flex;
  align-items: center;
  > *:not(:last-child) {
    margin-right: 0.3rem;
  }
  .logo {
    color: @font-color-primary;
    text-decoration: none;
  }
  .search {
    flex-grow: 1;
    color: @search-font-color-default;
    background: @search-bg-color;
    box-sizing: border-box;
    height: 0.7467rem;
    display: flex;
    align-items: center;
    padding: 0 0.4rem;
    border-radius: 0.125rem;
    span {
      flex: 1;
      margin-left: 0.25rem;
    }
  }
}
.tabbar {
  padding: 0 0.4rem;
  display: flex;
  height: 0.8rem;
  overflow-x: scroll;
  font-size: @font-size-md;
  color: @font-color-default;
  .item:not(:last-child) {
    margin-right: 0.4rem;
  }
  .item {
    flex-shrink: 0;
    text-align: center;
    display: flex;
    span {
      padding: 0 0.25rem;
      line-height: 0.8rem;
    }
  }
  .item[active="true"] {
    span {
      color: @font-color-primary;
      border-bottom: 2px solid @font-color-primary;
    }
  }
}
</style>

<template>
  <nav class="navbar">
    <div class="searchbar">
      <a href="" class="logo">严选</a>
      <a class="search" :href="search.href">
          <i class="fa fa-search"></i>
          <span class="placeholder">{{ search.placeholder }}</span>
      </a>
    </div>
    <nav class="tabbar">
        <div class="item" :active="tab.active" v-for="(tab, index) in tabs" :key="index" @click="onTabClick(index)">
            <span>{{ tab.title }}</span>
        </div>
    </nav>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: ["tabs", "search"],
  data() {
    return {};
  },
  methods: {
    onSearchbarClick() {
      this.$emit("on-searchbar-click");
    },
    onTabClick(index) {
      this.$el
        .querySelector(".item[active=true]")
        .setAttribute("active", false);
      this.$el.querySelectorAll(".item")[index].setAttribute("active", true);
      this.$router.push({ path: this.tabs[index].href });
    }
  }
};
</script>


