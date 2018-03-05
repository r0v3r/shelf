import Vue from "vue";
import Router from "vue-router";

import Home from "@/pages/Home";
import Recommand from "@/pages/Recommand";
import List from "@/pages/List";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Home,
      children: [
        {
          path: "rec",
          component: Recommand
        },
        {
          path: "list",
          component: List
        }
      ]
    }
  ]
});
