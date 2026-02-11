import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import CompaniesView from "@/views/CompaniesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/companies',
      name: 'companies',
      component: CompaniesView
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: CompaniesView
    },
    {
      path: '/submit',
      name: 'submit',
      component: CompaniesView
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView,
    },
  ],
});

export default router;
