import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main-layout",
      component: () => import("@/layouts/MainLayout.vue"),
      children: [
        {
          path: "/",
          name: "index",
          component: () => import("@/views/IndexView.vue"),
        },
      ],
    },
  ],
});

export default router;
