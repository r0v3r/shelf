<template>
  <div>item list {{category}}</div>
</template>

<script>
export default {
  name: "ItemList",
  data() {
    return {
      category: ""
    };
  },
  mounted() {
    this.category = this.$route.query.category;
  },
  watch: {
    $route: "handleChageCategory"
  },
  methods: {
    handleChageCategory() {
      this.category = this.$route.query.category;
      console.log(this.category);
    }
  }
};
</script>

