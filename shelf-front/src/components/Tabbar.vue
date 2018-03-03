<style lang="less" scoped>
@import (reference) url("../themes/default.less");
ul {
  width: 100%;
  height: 1.5rem;
  background: @wrapper-bg-color;
  position: fixed;
  bottom: 0;
  display: flex;
  align-content: center;
  font-size: @font-size-md;
  color: @font-color-default;
  li {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    i {
      font-size: 0.65rem;
    }
    span {
      font-size: @font-size-md;
    }
  }
  li[active="true"] {
    i,
    span {
      color: @font-color-primary;
    }
  }
}
</style>

<template>
<ul>
    <li v-for="(tab, index) in tabs" :key="index" :active="tab.active" @click="onTabClick(index)">
      <i :class="tab.icon"></i>
      <span>{{ tab.title }}</span>
    </li>
</ul>
</template>

<script>
export default {
  name: "Tabbar",
  props: ["tabs"],
  methods: {
    onTabClick(index) {
      this.$el.querySelector("li[active=true]").setAttribute("active", false);
      this.$el.querySelectorAll("li")[index].setAttribute("active", true);

      let path = this.tabs[index].href;
      console.log(path);
      this.$router.push({ path: path });
    }
  }
};
</script>
