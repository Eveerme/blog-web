import { createRouter, Router ,createWebHistory ,RouteRecordRaw} from 'vue-router'
const routes:RouteRecordRaw[]=[
  {
    path:'/',
    redirect:'/login'
  },
  {
    path:'/login',
    component:()=> import('@/views/login/Login.vue')
  },
  {
    path:'/index',
    component:()=> import('@/layout/index.vue'),
    children:[
      {
        path: '',
        redirect: "/home",
      },
      {
        path: '/home',
        component: ()=> import('@/views/home/Home.vue')
      },
      {
        path: '/user',
        component:()=> import('@/views/user/User.vue')
      },      
      {
        path: '/grades',
        component:()=> import('@/views/grades/Grades.vue')
      },      
      {
        path: '/teacher',
        component:()=> import('@/views/teacher/Teacher.vue')
      },      
      {
        path: '/',
        children: [
          {
            path: '/system',
            component:()=> import('@/views/system/System.vue')
          },          
          {
            path: '/changePass',
            component:()=> import('@/views/system/ChangePass.vue')
          },

        ]
      },
    ]
  },
  // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
  { 
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: ()=> import('@/views/error/404.vue')
},
]
const router:Router = createRouter({
  history:createWebHistory(),
  routes:routes
})

export default router
