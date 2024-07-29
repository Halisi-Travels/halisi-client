import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/contact-us",
    name: "contact page",
    component: () => import("../views/ContactPage.vue"),
  },
  {
    path: "/service/:id",
    name: "service page",
    component: () => import("../views/service_info.vue"),
  },
  {
    path: "/job-placement",
    name: "jobs page",
    component: () => import("../views/JobPlacementPage.vue"),
  },
  {
    path: "/about-page",
    name: "about page",
    component: () => import("../views/AboutPage.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("../views/unknown_page.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }

    return { top: 0, left: 0 };
  },
});

export default router;
