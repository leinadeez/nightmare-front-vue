import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/home/home-page.vue'
import Writer from '@/views/writer/writer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/writer',
    name: 'Writer',
    component: Writer
  }
]

const router = new VueRouter({
  routes
})

export default router
