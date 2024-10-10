// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Meditation from '../views/Meditation.vue';
import EmotionJournal from '../views/EmotionJournal.vue';
import Dashboard from '../views/Dashboard.vue';
import SelfCare from '../views/SelfCare.vue';
import SocialSupport from '../views/SocialSupport.vue';
import Login from '../components/auth/Login.vue';
import Register from '../components/auth/Register.vue';

const routes = [
  { path: '/login', component: Login, name: 'Login' },
  { path: '/register', component: Register, name: 'Register' },
  { path: '/', component: Home, name: 'Home', meta: { requiresAuth: true } },
  { path: '/dashboard', component: Dashboard, name: 'Dashboard', meta: { requiresAuth: true } },
  { path: '/meditation', component: Meditation, name: 'Meditation', meta: { requiresAuth: true } },
  { path: '/emotion-journal', component: EmotionJournal, name: 'EmotionJournal', meta: { requiresAuth: true } },
  { path: '/self-care', component: SelfCare, name: 'SelfCare', meta: { requiresAuth: true } },
  { path: '/social-support', component: SocialSupport, name: 'SocialSupport', meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation Guard pour vérifier l'authentification
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('authenticated') === 'true';

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;
