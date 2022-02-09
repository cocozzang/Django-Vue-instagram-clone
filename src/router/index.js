import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import(
      /* webpackChunkName: "layouts-default-index" */
      '@/layouts/default/Index'
    ),
    children: [
      {
        path: '/',
        name: 'Feed-Page',
        component: () => import(
          /* webpackChunkName: "views-Feed"*/
          '@/views/Feed'
        )
      },
    ]
  },
]

const router = new VueRouter({
  mode: process.env.NODE_ENV === 'production' ? 'hash' : 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
