import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: '/sign-up',
         name: 'SignUp',
         component: () => import('@/views/SignUp.vue'),
      },
      {
         path: '/sign-in',
         name: 'SignIn',
         component: () => import('@/views/SignIn.vue'),
      },
      {
         path: '/feed',
         name: 'Feed',
         component: () => import('@/views/Feed.vue'),
      },
      {
         path: '/content',
         name: 'Content',
         component: () => import('@/views/Content.vue'),
      },
      {
         path: '/profile',
         redirect: 'posts',
         name: 'Profile',
         component: () => import('@/views/Profile.vue'),
         children: [
            {
               path: 'posts',
               name: 'Posts',
               component: () => import('@/views/Profile/Posts.vue'),
            },
            {
               path: 'photos',
               name: 'Photos',
               component: () => import('@/views/Profile/Photos.vue'),
            },
         ],
      },
   ],
})

export default router
