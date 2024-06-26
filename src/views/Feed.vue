<script setup>
import PageTemplate from '@/layouts/PageTemplate.vue'

import PostSmall from '@/components/PostSmall.vue'
import SearchInput from '@/components/SearchInput.vue'

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
         <SearchInput />

         <div class="posts">
            <PostSmall v-for="post in posts" :key="post.id" :post="post" />
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

   .posts {
      display: flex;
      flex-direction: column;
      gap: 1rem;
   }
}
</style>
