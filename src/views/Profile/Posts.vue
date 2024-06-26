<script setup>
import PostSmall from '@/components/PostSmall.vue'

import { myPosts } from '@/mocks/myPosts'
</script>

<template>
   <div class="posts">
      <PostSmall v-for="post in myPosts" :key="post.id" :post="post" />
   </div>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';

.posts {
   display: flex;
   flex-direction: column;
   gap: 1rem;
}
</style>
