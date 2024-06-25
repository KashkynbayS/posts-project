<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import PageTemplate from '@/layouts/PageTemplate.vue'

const name = ref('')
const email = ref('')
const password = ref('')
const router = useRouter()

const handleRegister = () => {
   router.push('/login')
}
</script>

<template>
   <PageTemplate>
      <template #header>
         <span>X</span>
         <h2>Sign Up</h2>
         <router-link to="/sign-in">Login</router-link>
      </template>

      <form @submit.prevent="handleRegister">
         <div class="form-item">
            <input id="name" v-model="name" required placeholder="Name" />
         </div>

         <div class="form-item">
            <input id="email" v-model="email" required placeholder="Email" />
         </div>

         <div class="form-item">
            <input
               id="password"
               type="password"
               v-model="password"
               required
               placeholder="Password"
            />
            <span class="show-password">Show</span>
         </div>

         <div class="buttons">
            <button class="primary" type="submit">Sign Up</button>
            <button class="secondary" type="submit">Forgot your password?</button>
         </div>
      </form>

      <p v-if="error">{{ error }}</p>
   </PageTemplate>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';

form {
   display: flex;
   flex-direction: column;
   width: 100%;
   gap: 1rem;
   padding-top: 2rem;
   flex-grow: 1;

   .form-item {
      width: 100%;

      .show-password {
         position: absolute;
         right: 0;
         margin: 1rem 2rem 1rem 1rem;
         cursor: pointer;
         font-size: 1rem;
         color: $green;
      }
   }

   .buttons {
      margin-top: auto;
      display: flex;
      flex-direction: column;
   }
}
</style>
