import { MainScreen } from '@/renderer/screens'
import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/main',
      component: MainScreen,
      meta: {
        titleKey: 'title.main'
      }
    },
    {
      path: '/applications',
      component: () => import('@/renderer/screens/ApplicationsScreen.vue'),
      meta: {
        titleKey: 'title.applications'
      }
    },
    {
      path: '/accounts',
      component: () => import('@/renderer/screens/TheAccounts.vue'),
      meta: {
        titleKey: 'title.accounts'
      }
    },
    {
      path: '/second',
      component: () => import('@/renderer/screens/SecondScreen.vue'),
      meta: {
        titleKey: 'title.second'
      }
    },
    {
      path: '/error',
      component: () => import('@/renderer/screens/ErrorScreen.vue'),
      meta: {
        titleKey: 'title.error'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    },
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/home',
      component: () => import('@/renderer/screens/HomeScreen.vue'),
      meta: {
        titleKey: 'title.home'
      }
    }
  ]
})
