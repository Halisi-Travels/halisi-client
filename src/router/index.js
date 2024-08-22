import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";
import NProgress from "@/nprogress-config";

import HomeView from "../views/HomeView.vue";
// import Unknown from "@/views/UnknownView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    beforeEnter: (_, __, next) => {
      store
        .dispatch("fetchJobs")
        .then(() => {
          next();
        })
        .catch((err) => {
          console.error(err);
          next(false);
        });
    },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ContactView.vue"),
  },
  {
    path: "/jobs/:id",
    name: "job description",
    component: () => import("../views/JobPage.vue"),
    beforeEnter: (to, _, next) => {
      store
        .dispatch("fetchJob", to.params.id)
        .then(() => {
          next();
        })
        .catch((err) => {
          console.error(err);
          next(false);
        });
    },
  },
  {
    path: "/jobs",
    name: "jobs",
    component: () => import("../views/JobsView.vue"),
    beforeEnter: (_, __, next) => {
      store
        .dispatch("fetchJobs")
        .then(() => {
          next();
        })
        .catch((err) => {
          console.error(err);
          next(false);
        });
    },
  },
  {
    path: "/jobs/new",
    name: "new job",
    component: () => import("../views/NewJob.vue"),
    meta: {
      requiresAuth: true,
      requiresAdmin: true,
    },
  },
  {
    path: "/auth",
    name: "authentication",
    component: () => import("../views/AuthView.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/ProfileView.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/apply",
    name: "apply page",
    component: () => import("../views/ResumeView.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/unauthorized",
    name: "unauthorized",
    component: () => import("../views/UnauthorizedView.vue"),
  },
  // Catch-all route for handling 404 - Not Found
  {
    path: "/:catchAll(.*)",
    name: "notfound",
    component: () => import("@/views/UnknownView.vue"),
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

router.beforeEach((to, _, next) => {
  const isAuthenticated = store.getters.isAuthenticated;

  NProgress.start();

  // user needs to be logged in
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (isAuthenticated) {
      const userRole = store.getters.role;

      // user needs to be an admin or employer
      if (to.matched.some((record) => record.meta.requiresAdmin)) {
        if (userRole == "employer" || userRole == "admin") {
          next();
          return;
        }

        next("/unauthorized");
        return;
      }

      next();
      return;
    }

    next("/auth");
  } else {
    next();
  }
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
