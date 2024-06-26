<script setup>
import { ref, watch, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

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
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';

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
</style>
