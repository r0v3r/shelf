<style lang="less">

</style>

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  beforeCreate() {
    let clientWidth = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = clientWidth / 10 + "px";
  },
  watch: {
    $router:function(current, before) {
      console.log(before, " => ", current);
      if (current.path === "/") {
        this.$router.push({
          path: "/home"
        });
      }
    }
  }
};
</script>
