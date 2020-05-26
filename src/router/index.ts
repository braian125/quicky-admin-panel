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
        /* webpackChunkName: "dashboard" */ "./../containers/dashboard/Dashboard.vue"
      ),
    children: [
      {
        path: "/home",
        name: "home",
        component: () =>
          import(/* webpackChunkName: "home" */ "./../views/Home.vue"),
      },
      {
        path: "products",
        name: "",
        component: {
          render(c) {
            return c("router-view");
          },
        },
        children: [
          {
            path: "",
            name: "list-products",
            component: () =>
              import(
                /* webpackChunkName: "products" */ "./../views/products/ProductsList.vue"
              ),
          },
          {
            path: "new",
            name: "create-product",
            component: () =>
              import(
                /* webpackChunkName: "create-products" */ "./../views/products/ProductCreate.vue"
              ),
          },
        ]
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
