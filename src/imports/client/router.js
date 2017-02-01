import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import NotFound from './components/NotFound.vue'
import Page1 from './components/Page1.vue'
import Page2 from './components/Page2.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/page1', name: 'page1', component: Page1 },
  { path: '/tata/page2/:id', name: 'page2', component: Page2, meta: { secondary: true } },
  { path: '*', component: NotFound },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
