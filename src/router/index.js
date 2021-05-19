import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Calendar from '../views/Calendar.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/calendario',
    name: 'Calendar',
    component: Calendar,
  },
  {
    path: '/usuarios',
    name: 'Users',
    component: () =>
      import(/*webpackChunkName: "users" */ '../views/Users.vue'),
  },
  {
    path: '/sucursales',
    name: 'Locations',
    component: () =>
      import(/*webpackChunkName: "locations" */ '../views/Locations.vue'),
  },
  {
    path: '/turnos',
    name: 'Turns',
    component: () =>
      import(/*webpackChunkName: "turns" */ '../views/TurnTemplates.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
