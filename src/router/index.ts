import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "",
    redirect: "home",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "./../containers/dashboard/Dashboard.vue"
      ),
    children: [
      {
        path: "/home",
        name: "home",
        component: () =>
          import(/* webpackChunkName: "about" */ "./../views/Home.vue"),
      },
      {
        path: "careers",
        name: "",
        component: {
          render(c) {
            return c("router-view");
          },
        },
        children: [
          {
            path: "new",
            name: "create-career",
            component: () =>
              import(
                /* webpackChunkName: "company" */ "./../views/careers/CreateCareer.vue"
              ),
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "./../views/Login.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
