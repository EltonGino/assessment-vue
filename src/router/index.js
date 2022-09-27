import { createRouter, createWebHashHistory } from 'vue-router'
import AddTutorial from '../components/AddTutorial'
import Tutorial from '../components/Tutorial'
import TutorialsList from '../components/TutorialsList'


const routes = [
  {
    path: '/',
    alias: '/tutorials',
    name: 'tutorials',
    component: () => import("../components/TutorialsList")
  },
  {
    path: '/add',
    name: 'add',
    component: () => import("../components/AddTutorial")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router