import Navbar from "./Navbar.vue";

const components = {
  install: function(Vue) {
    Vue.component(Navbar.name, Navbar);
  }
};

export default components;
