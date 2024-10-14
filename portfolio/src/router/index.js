import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Experience from '../views/Experience.vue';
import Projects from '../views/Projects.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/experience', component: Experience },
  { path: '/projects', component: Projects },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
