<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { useAuthStore } from '@/stores/auth.js'

import PageTemplate from '@/layouts/PageTemplate.vue'

const username = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()
const authStore = useAuthStore()

const handleLogin = () => {
   if (authStore.login(username.value, password.value)) {
      router.push('/feed')
   } else {
      error.value = 'Invalid username or password'
   }
}
</script>

<template>
   <PageTemplate>
      <template #header>
         <h2 id="login-h2">Log In</h2>
      </template>

      <form @submit.prevent="handleLogin">
         <div>
            <label for="username">Username</label>
            <input id="username" v-model="username" required />
         </div>
         <div>
            <label for="password">Password</label>
            <input id="password" type="password" v-model="password" required />
         </div>
         <button type="submit">Login</button>
      </form>
      <p v-if="error">{{ error }}</p>
   </PageTemplate>
</template>

<style scoped>
#login-h2 {
   text-align: center;
}
form {
   label {
      font-size: 50px;
   }
}
</style>
