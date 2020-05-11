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
        path: "careers",
        name: "",
        component: {
          render(c) {
            return c("router-view");
          },
        },
        children: [
          {
            path: "",
            name: "list-careers",
            component: () =>
              import(
                /* webpackChunkName: "careers" */ "./../views/careers/Careers.vue"
              ),
          },
          {
            path: "new",
            name: "create-career",
            component: () =>
              import(
                /* webpackChunkName: "create-careers" */ "./../views/careers/CreateCareer.vue"
              ),
          },
          {
            path: ":id(\\d+)?",
            name: "edit-career",
            component: () =>
              import(
                /* webpackChunkName: "create-careers" */ "./../views/careers/CreateCareer.vue"
              ),
          },
        ],
      },
      {
        path: "roadmap",
        name: "",
        component: {
          render(c: any) {
            return c("router-view");
          },
        },
        children: [
          {
            path: "new",
            name: "create-roadmap",
            component: () =>
              import(
                /* webpackChunkName: "create-roadmap" */ "./../views/roadmaps/CreateRoadmap.vue"
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
