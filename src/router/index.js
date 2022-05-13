import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  }, {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
          title: '首页',
          icon: 'el-icon-house'
        },
        component: () => import ( /* webpackChunkName: "dashboard" */ '../views/Dashboard.vue')
      },
      {
        path: '/database',
        name: 'database',
        meta: {
          title: '数据库',
          icon: 'el-icon-coin'
        },
        component: () => import ( /* webpackChunkName: "dashboard" */ '../views/database/DataBase.vue')
      },
      {
        path: '/baseForm',
        name: 'baseForm',
        meta: {
          title: '表单',
          icon: 'el-icon-document'
        },
        component: () => import ( /* webpackChunkName: "dashboard" */ '../views/BaseForm.vue')
      },
      {
        path: '/baseTable',
        name: 'baseTable',
        meta: {
          title: '表格',
          icon: 'el-icon-document-copy'
        },
        component: () => import ( /* webpackChunkName: "dashboard" */ '../views/BaseTable.vue')
      },
      {
        path: '/textEditor',
        name: 'textEditor',
        meta: {
          title: '文本编辑器',
          icon: 'el-icon-edit'
        },
        component: () => import ( /* webpackChunkName: "dashboard" */ '../views/TextEditor.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// router.beforeEach((to, from, next) => {
//   document.title = `${to.meta.title} | Electron-Init`
//   next()
// })

export default router
