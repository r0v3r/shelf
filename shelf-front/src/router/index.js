import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/Home.vue";
import Recommands from "@/components/Recommands.vue";
import ItemList from "@/components/ItemList.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Home,
      children: [
        { path: "rec", component: Recommands },
        { path: "item/list", component:ItemList }
      ]
    }
  ]
});
