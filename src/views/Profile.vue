<script setup>
import { ref, watch, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import PageTemplate from '@/layouts/PageTemplate.vue'
import User from '@/assets/images/user.png'

const router = useRouter()
const route = useRoute()

const page = ref(route.name === 'Posts' ? 'posts' : 'photos')

watch(page, () => {
   router.push({
      name: page.value === 'posts' ? 'Posts' : 'Photos',
   })
})

const navigateTo = targetPage => {
   page.value = targetPage
}

const isPostsActive = computed(() => page.value === 'posts')
const isPhotosActive = computed(() => page.value === 'photos')
</script>

<template>
   <div class="green-field"></div>

   <PageTemplate>
      <template #header>
         <router-link to="" class="profile-header">Settings</router-link>
         <h2 id="login-h2" class="profile-header">Profile</h2>
         <router-link to="/sign-in" class="profile-header">Logout</router-link>
      </template>

      <div id="main-content">
         <div class="user-data">
            <div class="user-image">
               <img :src="User" alt="" />
            </div>
            <div class="user-name">
               <h2>Victoria Robertson</h2>
               <p>A mantra goes here</p>
            </div>
         </div>

         <div class="segment-container">
            <div class="segment-control">
               <div :class="['posts', { active: isPostsActive }]" @click="navigateTo('posts')">
                  <span>Posts</span>
               </div>
               <div :class="['photos', { active: isPhotosActive }]" @click="navigateTo('photos')">
                  <span>Photos</span>
               </div>
            </div>
         </div>

         <router-view></router-view>
      </div>
   </PageTemplate>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';

.green-field {
   position: absolute;
   width: 100%;
   height: 200px;
   background-color: $green;
   z-index: -1;
}

.profile-header {
   color: white;
}

#main-content {
   position: relative;
   width: 100%;
   display: flex;
   flex-direction: column;
   gap: 1.5rem;

   .user-data {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .user-image {
         display: flex;
         justify-content: center;

         img {
            width: 158px;
            height: 158px;
            border-radius: 50%;
            border: 5px solid white;
         }
      }

      .user-name {
         display: flex;
         flex-direction: column;
         text-align: center;
         gap: 0.5rem;

         p {
            font-size: 1rem;
            font-weight: 600;
         }
      }
   }

   .segment-container {
      position: sticky;
      position: -webkit-sticky;
      top: 0;
      padding-bottom: 1rem;
      background-color: white;

      .segment-control {
         display: flex;
         border: 2px solid $gray-e8;
         border-radius: 100px;
         background-color: $gray;

         div {
            width: 50%;
            text-align: center;
            padding: 0.875rem;
            border-radius: 100px;
            font-weight: 600;
            color: $gray-bd;
            font-size: 1rem;
         }

         .active {
            background-color: white;

            span {
               color: $green;
            }
         }
      }
   }
}
</style>
