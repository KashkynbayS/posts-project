<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { useAuthStore } from '@/stores/auth.js'

import PageTemplate from '@/layouts/PageTemplate.vue'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()
const authStore = useAuthStore()
const showPassword = ref(false)

const handleLogin = () => {
   if (authStore.login(email.value, password.value)) {
      router.push('/feed')
   } else {
      error.value = 'Invalid email or password'
   }
}

const toggleShowPassword = () => {
   showPassword.value = !showPassword.value
}
</script>

<template>
   <PageTemplate>
      <template #header>
         <h2 id="login-h2">Log In</h2>
      </template>

      <form @submit.prevent="handleLogin">
         <div class="form-item">
            <input id="email" v-model="email" required placeholder="Email" />
         </div>

         <div class="form-item">
            <input
               id="password"
               :type="showPassword ? 'text' : 'password'"
               v-model="password"
               required
               placeholder="Password"
            />
            <span class="show-password" @click="toggleShowPassword">
               {{ showPassword ? 'Hide' : 'Show' }}
            </span>
         </div>

         <div class="buttons">
            <button class="primary" type="submit">Log In</button>
            <button class="secondary">Forgot your password?</button>
         </div>
      </form>

      <p v-if="error">{{ error }}</p>
   </PageTemplate>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';

#login-h2 {
   text-align: center;
}

form {
   display: flex;
   flex-direction: column;
   width: 100%;
   gap: 1rem;
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
