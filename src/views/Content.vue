<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

import { usePostStore } from '@/stores/postStore'

import PageTemplate from '@/layouts/PageTemplate.vue'

import SearchInput from '@/components/SearchInput.vue'
import PostLarge from '@/components/PostLarge.vue'
import FooterNavigation from '@/components/FooterNavigation.vue'

const postStore = usePostStore()
const router = useRouter()

const post = computed(() => postStore.currentPost)

const goBack = () => {
   router.go(-1)
}
</script>

<template>
   <PageTemplate>
      <template #header>
         <router-link to="" @click="goBack">Back</router-link>
         <h2 id="login-h2">Content</h2>
         <router-link to="">Filter</router-link>
      </template>

      <div id="main-content">
         <SearchInput />

         <div v-if="post">
            <PostLarge :post="post" />
         </div>
      </div>

      <template #footer>
         <FooterNavigation />
      </template>
   </PageTemplate>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';

#main-content {
   position: relative;
   width: 100%;
   display: flex;
   flex-direction: column;
}
</style>
