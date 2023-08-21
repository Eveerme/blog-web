import { createRouter, Router ,createWebHistory ,RouteRecordRaw} from 'vue-router';
import { useUserStore } from "@/store/userStore";
import { getToken } from '@/utils/localstorage/TokenUtils';


const routes:RouteRecordRaw[]=[
  {
    path:'/',
    redirect:'/index'
  },
  {
    path: '/login',
    name: 'login',
    meta: {title: '登录'},
    component:()=> import('@/views/login/Login.vue')
  },
  {
    path:'/index',
    name: 'index',
    meta: {title: '首页'},
    component:()=> import('@/layout/index.vue'),
    children:[
      {
        path: '',    
        redirect: "/home",
      },
      {
        path: '/home',
        name: 'home',
        meta: {title: '首页'},
        component: ()=> import('@/views/home/Home.vue')
      },
      {
        path: '/user',
        name: 'user',
        meta: {title: '用户管理'},
        component:()=> import('@/views/user/User.vue')
      },      
      {
        path: '/grades',
        name: 'grades',
        meta: {title: '成绩管理'},
        component:()=> import('@/views/grades/Grades.vue')
      },      
      {
        path: '/teacher',
        name: 'teacher',
        meta: {title: '教师管理'},
        component:()=> import('@/views/teacher/Teacher.vue')
      },
      {
        path: '/course',
        name: 'course',
        meta: {title: '学科管理'},
        component:()=> import('@/views/course/Course.vue')
      },
      {
        path: '/exam',
        name: 'exam',
        meta: {title: '考试管理'},
        component:()=> import('@/views/exam/Exam.vue')
      },      
      {
        path: '/',
        children: [
          {
            path: '/system',
            name: 'system',
            meta: {title: '系统管理'},
            component:()=> import('@/views/system/System.vue')
          },          
          {
            path: '/changePass',
            name: 'changePass',
            meta: {title: '修改密码'},
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

// 路由拦截
router.beforeEach((to, from, next) => {
  // 获取用户存储的 token
  const userStore = useUserStore();
  const token = getToken();
  console.log("+++++++"+token);

  // 如果用户已登录，并且要访问的路径有匹配项或者从不是登录页，则允许访问
  if (token) {
    // 是否有该路径
    if (to.matched.length > 0 || from.path !== '/') {
      next();
    } else {
      // 防止页面刷新
      // 如果从登录页跳转到其他页面，并且没有匹配项，则重定向到首页
      if (from.path == '/' && to.matched.length <= 0) {
        next(to.path);
      } else {
        // 如果从其他页面跳转到登录页，则重定向到登录页
        ElNotification({
          title: '退出登录成功',
          type: 'success',
        })
        next('/login');
      }
    }
  } else {
    // 如果用户未登录，并且要访问的路径是登录页，则允许访问
    if (to.path == '/login') {
      next();
    } else {
      // 如果用户未登录，并且要访问的路径不是登录页，则重定向到登录页
      ElNotification({
        title: '请先登录再访问！',
        type: 'error',
      })
      next('/login');
    }
  }
});

export default router
