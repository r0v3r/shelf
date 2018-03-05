import Vue from "vue";
import Router from "vue-router";

import Home from "@/pages/Home";
import Recommand from "@/pages/Recommand";
import List from "@/pages/List";

import Discover from "@/pages/Discover";

Vue.use(Router);

export default new Router({
  // mode: "history",
  routes: [
    {
      path: "/",
      redirect: {
        path: "/home/recommand"
      }
    },
    {
      path: "/home",
      redirect: {
        path: "/home/recommand"
      }
    },
    {
      path: "/home",
      component: Home,
      children: [
        {
          path: "/home/recommand",
          component: Recommand
        },
        {
          path: "/home/list",
          component: List
        }
      ]
    },
    {
      path: "/discover",
      component: Discover
    }
  ]
});
