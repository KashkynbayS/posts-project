<script setup>
import { defineProps } from 'vue'

const props = defineProps({
   post: Object,
})

const { image, title, description, countdown } = props.post
</script>

<template>
   <div class="post">
      <div class="top-side">
         <img :src="image" alt="post" />
      </div>
      <div class="bottom-side">
         <div class="title">
            <h3>{{ title }}</h3>
         </div>
         <div class="description">
            <p>{{ description }}</p>
         </div>
         <span>{{ countdown }}</span>
      </div>
   </div>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';

.post {
   display: flex;
   flex-direction: column;
   gap: 0.5rem;

   .top-side {
      img {
         width: 100%;
         height: 15rem;
         object-fit: cover;
         border-radius: 8px;
      }
   }

   .bottom-side {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      width: 100%;

      .title {
         display: flex;
         justify-content: space-between;
      }

      span {
         color: $gray-bd;
      }
   }
}
</style>
