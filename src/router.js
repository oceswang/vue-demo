import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: () => import('./components/Home')
    },
    {
      path: "/login",
      component: () => import('./components/Login')
    }
  ]
});

export default router
