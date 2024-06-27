<script setup>
import { ref } from 'vue'

const navigationLinks = ref([
   { to: '/sign-up', text: 'Sign Up' },
   { to: '/sign-in', text: 'Sign In' },
   { to: '/feed', text: 'Feed' },
   { to: '/profile', text: 'Profile' },
])
</script>

<template>
   <div id="footer-navigations">
      <router-link
         v-for="link in navigationLinks"
         :key="link.to"
         :to="link.to"
         class="navigation-item"
      >
         <span class="icon"></span>
         <h4>{{ link.text }}</h4>
      </router-link>
   </div>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';

#footer-navigations {
   display: flex;
   justify-content: space-around;
   padding: 0.5rem 0;
   border-top: 1px solid $gray-BD;

   .navigation-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      color: $gray-3b;

      .icon {
         display: flex;
         width: 32px;
         height: 32px;
         background-color: $gray-e8;
         border-radius: 50%;
      }
   }
}
</style>
