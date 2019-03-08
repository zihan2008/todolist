import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import * as custom from './common/filters/custom'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history',
  base: __dirname,
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return { x: 0, y: 300 }
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return {x: 0, y: to.meta.savedPosition || 0}
    }
  }
})

Object.keys(custom).forEach((key) => {
  Vue.filter(key,custom[key])
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router
}).$mount('#app')
