import { createRouter, createWebHistory } from 'vue-router'
import About from '../components/About/About'
import Main from '../components/Main/Main'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Main
  },
  {
    path: '/about/:todo_id',
    name: 'About',
    component: About,
    props: true
  }
]

const router = createRouter({
  // eslint-disable-next-line no-undef
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
