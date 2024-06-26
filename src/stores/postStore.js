import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePostStore = defineStore('postStore', () => {
   const currentPost = ref(null)

   const setCurrentPost = post => {
      currentPost.value = post
   }

   return { currentPost, setCurrentPost }
})
