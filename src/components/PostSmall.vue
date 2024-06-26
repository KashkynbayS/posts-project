<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

import { usePostStore } from '@/stores/postStore'

const props = defineProps({
   post: Object,
})

const postStore = usePostStore()
const router = useRouter()

const { image, title, description, countdown } = props.post

const openPost = () => {
   postStore.setCurrentPost(props.post)
   router.push(`/content/${props.post.id}`)
}
</script>

<template>
   <div class="post" @click="openPost">
      <div class="left-side">
         <img :src="image" alt="post" />
      </div>
      <div class="right-side">
         <div class="title">
            <h3>{{ title }}</h3>
            <span>{{ countdown }}</span>
         </div>
         <div class="description">
            <p>{{ description }}</p>
         </div>
      </div>
   </div>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';

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
</style>
