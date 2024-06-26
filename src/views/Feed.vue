<script setup>
import PageTemplate from '@/layouts/PageTemplate.vue'

import Post from '@/components/PostSmall.vue'

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
            <Post v-for="post in posts" :key="post.title" :post="post" />
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
   }
}
</style>
