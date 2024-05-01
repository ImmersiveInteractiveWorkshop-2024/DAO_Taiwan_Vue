import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: '首頁',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '/home',
        name: '首頁',
        component: () => import('../views/HomeView.vue')
      },
      {
        path: '/start',
        name: '物件選擇',
        component: () => import('../views/StartView.vue')
      },
      {
        path: '/models',
        name: '選擇模型',
        component: () => import('../views/ModelsView.vue')
      },
      {
        path: '/drawing',
        name: '繪製貼圖',
        component: () => import('../views/DrawingView.vue')
      },
      {
        path: '/result',
        name: '結果頁面',
        component: () => import('../views/ResultView.vue')
      },
      {
        path: '/gallery',
        name: '作品集頁面',
        component: () => import('../views/GalleryView.vue')
      }
    ]
  },
  {
    path: '/login',
    name: '管理員登入',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard/DashboardView.vue'),
    children: [
      {
        path: '/product',
        name: '產品管理',
        component: () => import('../views/Dashboard/ProductView.vue')
      },
      {
        path: '/order',
        name: '訂單管理',
        component: () => import('../views/Dashboard/OrderView.vue')
      }

    ]
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
