<script setup>
import PageTemplate from '@/layouts/PageTemplate.vue'

import { posts } from '@/mocks/posts'
</script>

<template>
   <PageTemplate>
      <template #header>
         <router-link to="">Back</router-link>
         <h2 id="login-h2">Feed</h2>
         <router-link to="">Filter</router-link>
      </template>

      <div id="main-content">
         <div class="input-container">
            <input type="text" placeholder="Search" />
         </div>

         <div class="posts">
            <div class="post" v-for="post in posts" :key="post.title">
               <div class="left-side">
                  <img :src="post.image" alt="post" />
               </div>
               <div class="right-side">
                  <div class="title">
                     <h3>{{ post.title }}</h3>
                     <span>{{ post.countdown }}</span>
                  </div>
                  <div class="description">
                     <p>{{ post.description }}</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </PageTemplate>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';

#main-content {
   position: relative;
   width: 100%;
   display: flex;
   flex-direction: column;

   .input-container {
      position: sticky;
      position: -webkit-sticky;
      top: 0;
      padding-bottom: 1rem;
      background-color: white;
   }

   input {
      border-radius: 6.25rem;
   }

   .posts {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .post {
         display: flex;
         gap: 1rem;

         .left-side {
            img {
               width: 50px;
               height: 50px;
               border-radius: 8px;
            }
         }

         .right-side {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            width: 100%;
            padding-bottom: 1rem;
            border-bottom: 1px solid $gray-e8;

            .title {
               display: flex;
               justify-content: space-between;

               span {
                  color: $gray-bd;
               }
            }
         }
      }
   }
}
</style>
