// router.js
import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/sections/Home.vue';
import Detail from '@/sections/About.vue';
import Category from '@/sections/Category.vue';
import Contact from '@/sections/Contact.vue';

const routes = [
  { path: '/', component: Home, meta: { title: 'Home' }},
  { path: '/about', component: Detail, meta: { title: 'About' } },
  { path: '/category', component: Category, meta: { title: 'Category' } },
  { path: '/contact', component: Contact, meta: { title: 'Contact' } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Default Title';
  next();
});

export default router;