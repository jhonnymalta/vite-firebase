import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "./stores/userStore";

const requireAuth = async (to, from, next) => {
  const userStore = useUserStore();
  const user = await userStore.currentUser();
  if (user) {
    console.log(user);
    next("/");
  } else {
    next("/login");
  }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../src/views/home.vue"),
      //beforeEnter: requireAuth,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../src/views/login.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../src/views/register.vue"),
    },
  ],
});
export default router;
