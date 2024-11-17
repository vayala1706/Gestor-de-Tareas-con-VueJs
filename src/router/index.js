import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AddTask from '@/views/AddTask.vue';
import TaskList from '@/views/TaskList.vue';
import CombinedView from '@/views/CombinedView.vue'; // Importa la vista combinada
import AboutView from '@/views/AboutView.vue'; // Importa AboutView si lo necesitas

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/addtask',
    name: 'addtask',
    component: AddTask,
  },
  {
    path: '/tasklist',
    name: 'tasklist',
    component: TaskList,
  },
  {
    path: '/combined', // Nueva ruta para la vista combinada
    name: 'combined',
    component: CombinedView, // Asigna el componente
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
