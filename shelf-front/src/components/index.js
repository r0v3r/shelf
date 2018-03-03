import Navbar from "./Navbar.vue";
import Tabbar from "./Tabbar.vue";
import Recommands from "./Recommands.vue";
import ItemList from "./ItemList.vue";

const components = {
  install: function(Vue) {
    Vue.component(Navbar.name, Navbar);
    Vue.component(Tabbar.name, Tabbar);
    Vue.component(Recommands.name, Recommands);
    Vue.component(ItemList.name, ItemList);
  }
};

export default components;
